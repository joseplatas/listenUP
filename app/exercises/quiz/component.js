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
        this.getCurrentCourse = this.getCurrentCourse.bind(this);
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
            this.setState({
              options: fns.getQuizOptions(
                () => Math.random(),
                this.getCurrentCourse().answer,
                this.getCurrentCourse().answerOptions)
            })
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
    getCurrentCourse() {
      if(!this.state.courses)
          throw 'Attempted to access courses before being loaded.'
      else {
          return this.state.courses[this.state.id]
      }
    }
    //end runtime methods

    //begin JSX
    renderVideo() {
      return <iframe 
        width="560" 
        height="315" 
        src={this.getCurrentCourse().videoUrl}>
      </iframe>
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
                    score='0'/>
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
                            {this.getCurrentCourse().question}
                            </h5>

                            <div className={classes('quiz_btns_container', 'flex_container')}>
                                <a className={classes('quiz_option')} href="#">
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
                                </a>

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
