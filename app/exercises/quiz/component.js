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
        //this.getCurrentCourse = this.getCurrentCourse.bind(this);
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
    /**
      Returns courses base on the language
    */
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

    //get the current course
    // getCurrentCourse() {
    //   if(!this.state.courses)
    //       throw 'Attempted to access courses before being loaded.'
    //   else {
    //       return this.state.courses[this.state.id]
    //   }
    // }

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
      console.log(currentCourseIndex)
      console.log(nextCourse)
      const scrambledNextCourse = {
        id: nextCourse.courseId,
        options: fns.getQuizOptions(
          () => Math.random(),
          nextCourse.answer,
          nextCourse.answerOptions),
        videoUrl: nextCourse.videoUrl,
        question: nextCourse.question
      }

      console.log(scrambledNextCourse)
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
        src={this.state.currentCourse.videoUrl}>
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

    render() {
      if(localStorage.user_id == undefined){
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

      return this.state.loading
      ? (<div className={classes('page_container','flex_container')}>Loading...</div>)
      : (<div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_container', 'flex_container')}>

                {/* EXERCISE HEADER */}
                <div className={classes('exercise_header', 'flex_container')}>
                    <Exercise_Header 
                    language={this.state.language} 
                    title={fns.generateHeader(this.state.language)} 
                    score={this.state.score}/>
                </div>

                <div className={classes('exercise_content', 'flex_container')}>

                <div className={classes('video_panel','flex_container')}>

                <h5 className={classes('blue_text', 'input_header')}>
                  {fns.generateQuizDirections(this.state.language)}
                </h5>

                {this.renderVideo()}

                </div>

                    <div className={classes('input_panel', 'flex_container')}>


                        <div className={styles.user_input}>

                            <h5 className={classes('blue_text', 'input_header')}>
                            {this.state.currentCourse.question}
                            </h5>

                            <div className={classes('quiz_btns_container', 'flex_container')}>
                                
                                {/* <a className={classes('quiz_option')} href="#">
                                  {this.state.options[0]}
                                </a>
                                <a className={classes('quiz_option')} href="#">
                                  {this.state.options[1]}
                                </a>
                                <a className={classes('quiz_option')} href="#">
                                  {this.state.options[2]}
                                </a>
                                <a className={classes('quiz_option')} href="#">
                                  {this.state.options[3]}
                                </a> */}

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
