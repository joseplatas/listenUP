import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../shared/shared_fns.js'
import { Exercise_Header } from '../shared/exercise_header/component.js'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

function getQuizQuestion() {
    return 'This is a test question'
}


export class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGoNext = this.handleGoNext.bind(this);
        this.renderOptionButton = this.renderOptionButton.bind(this);
        this.renderSelectedOptionButton = this.renderSelectedOptionButton.bind(this);
        this.state = {
          loading: true
      }
    }

    //begin lifecycle hooks
    // get necessary properties and update state
    // runs after Constructor
    componentDidMount() {
      this.getCourses()
          .then(result => {
              this.setState({
                  language: this.props.match.params.language, //pass as param in url
                  courses: result.courses,
                  id: 0,
              })
          })
          .then(() => {
            this.handleGoNext()
          })
          .then(() => {
            this.setState({
              loading: false
            })
          })
    }
    //end lifecycle hooks

    //begin init methods

    // returns courses based on language
    getCourses(){
      return fetch(new Request('http://localhost:8080/api/exercises/getCourses', {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          "language": this.props.match.params.language,
          "exerciseType": "quiz"
          })
      })).then((response) => {
        //get json full response after is done processing
        return response.json();
      }).then((data)=>{
        //return value from above
        console.log(data);
        return data;
      });
    }

    //end init methods

    //begin runtime methods

    handleSubmit(userAnswer) {
      var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: false,
        view: window
      });

      //api call to validate answer
      fetch(new Request('http://localhost:8080/api/exercises/verifyCourseAnswer', {
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
          "username": localStorage.username,
          "courseId": this.state.currentCourse.id,
          "userAnswer": userAnswer
          })
      })).then((response) => {
        //get json full response after is done processing
        return response.json();
      }).then((data)=>{
        this.setState({
            userAnswer: userAnswer,
            expectedAnswer: data.validateRes.answer,
            score: data.validateRes.pointsEarned
        })
      });
    }

    // allows to move on to the next course item
    handleGoNext(event) {
      if(event)
        event.preventDefault();

      const currentCourseIndex = fns.findCourseIndexById(this.state.courses, (this.state.currentCourse || {}).id)
      const nextCourse = this.state.courses[(currentCourseIndex + 1) % this.state.courses.length];

      // prepares next course and shuffles its options
      const scrambledNextCourse = {
        id: nextCourse.courseId,
        options: fns.getQuizOptions(
          () => Math.random(),
          nextCourse.answer,
          nextCourse.answerOptions),
        videoUrl: nextCourse.videoUrl,
        question: nextCourse.question
      }

      //return value from above
      this.setState({
        score: '',
        expectedAnswer: '',
        userAnswer: null,
        currentCourse: scrambledNextCourse
      })

        //reloads audio player
        this.refreshVideoPlayer();
  }

    //end runtime methods

    //begin JSX

    // refresh video player
    refreshVideoPlayer() {
      this.setState({
          videoPlayerHidden: true
      })
      setTimeout(() => this.setState({
          videoPlayerHidden: false
      }), 100)
  }

    // render video player
    renderVideo() {
      return !this.state.videoPlayerHidden && (
      <iframe
        width="560"
        height="315"
        src={this.state.currentCourse.videoUrl+'?autoplay=1'}>
      </iframe>
      )
    }

    // render option buttons

    renderOptionButton(option) {
      return this.state.userAnswer
        ? (
          this.renderSelectedOptionButton(option)
        )
        : (
          <button
          className={classes('quiz_option')}
          onClick={e => this.handleSubmit(option)} >
          {option}
          </button>
        )
    }

    // change color when receiving results
    renderSelectedOptionButton(option) {
      return (this.state.score == 10)
      ? (
          <button
          className={classes('quiz_option','quiz_option_correct')}>
          {option}
          </button>
      )
      : (
        <button
        className={classes('quiz_option', 'quiz_option_incorrect')}>
        {option}
        </button>
      )
    }

    // renders Next button when question has been answered
    // remains blank if not
    renderNextButton() {
      return this.state.userAnswer
        ? (
          <form onSubmit={this.handleGoNext}>
            <input type='submit'
            value='next'
            className={classes('quiz_option','next_btn')}/>
          </form>
        )
        : (
          <button className={classes('quiz_option','next_hidden')}></button>
        )
    }

    // allows user to access page only if they are logged in
    render() {
      if(localStorage._id == undefined){
        return(
          <div className={classes('page_container', 'flex_container')}>
            <div className={classes('center_container')}>
                <h1>
                  <center>
                    Please login to see this exercise <Link to='/Login' className={styles.login_link}>here</Link>
                  </center>
                </h1>

            </div>
          </div>
        );
      }

      // returns component if the page is completely loaded
      return this.state.loading
      ? (<div className={classes('page_container','flex_container')}>Loading...</div>)
      : (<div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_container', 'flex_container')}>

                {/* pulls in Exercise_Header component */}
                <div className={classes('exercise_header', 'flex_container')}>
                    <Exercise_Header
                    language={this.state.language}
                    // generates a language-appropriate title
                    title={fns.generateHeader(this.state.language)}
                    score={this.state.score}/>
                </div>

                <div className={classes('exercise_content', 'flex_container')}>

                {/* begin video panel */}
                <div className={classes('video_panel','flex_container')}>

                  {/* generates instructions for user depending on language */}
                  <h5 className={classes('input_header')}>
                    {fns.generateQuizDirections(this.state.language)}
                  </h5>

                  {/* renders video */}
                  {this.renderVideo()}

                </div>

                {/* begin input panel */}
                    <div className={classes('input_panel', 'flex_container')}>

                        <div className={styles.user_input}>

                            {/* generations course question */}
                            <h5 className={classes('input_header')}>
                              {this.state.currentCourse.question}
                            </h5>

                            {/* renders course options and Next button (if question has been answered) */}
                            <div className={classes('quiz_btns_container', 'flex_container')}>

                                {this.renderOptionButton(this.state.currentCourse.options[0])}

                                {this.renderOptionButton(this.state.currentCourse.options[1])}

                                {this.renderOptionButton(this.state.currentCourse.options[2])}

                                {this.renderOptionButton(this.state.currentCourse.options[3])}

                                {this.renderNextButton()}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      );


    }
    //end JSX



}
