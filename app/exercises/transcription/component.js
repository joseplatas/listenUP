import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../shared/shared_fns.js'
import { Exercise_Header } from '../shared/exercise_header/component.js'
import { Tooltip } from './tooltip/component.js'
import '../shared/img/audio_controls_pause.png'
import '../shared/img/audio_controls_play.png'
import '../shared/img/audio_controls_stop.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Transcription extends React.Component {
    constructor(props) {
        super(props);
        this.getCurrentCourse = this.getCurrentCourse.bind(this);
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            loading: true
        }
    }

    // get necessary properties and update state
    componentDidMount() {
        this.getCourses()
            .then(result => {
                this.setState({
                    loading: false,
                    language: this.props.match.params.language, //pass as param in url
                    courses: result.courses,
                    id: 0
                });
            })
    }

    //get the current course
    getCurrentCourse() {
        if(!this.state.courses)
            throw 'Attempted to access courses before being loaded.'
        else {
            return this.state.courses[this.state.id]
        }
    }

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
          "exerciseType": "transcription"
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

    handleUserInputChange(event) {
        this.setState({userInput: event.target.value})
    }

    // forces browser to reload media player
    // takes down audioplayer and puts it back up after delay
    // allows loading of next audio file
    refreshMediaPlayer() {
        this.setState({
            mediaPlayerHidden: true
        })
        setTimeout(() => this.setState({
            mediaPlayerHidden: false
        }), 100)
    }

    //validate answer with api
    handleSubmit(event) {
        event.preventDefault();
        var userAnswer = this.state.userInput;
        //stop if no answer
        if(userAnswer.length < 5){
          alert("Please enter full answer");
          return;
        }

        //api call to validate allAnswer
        fetch(new Request('http://localhost:8080/api/exercises/verifyCourseAnswer', {
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          method: 'POST',
          body: JSON.stringify({
            "username": localStorage.username,
            "courseId": this.getCurrentCourse().courseId,
            "userAnswer": userAnswer
            })
        })).then((response) => {
          //get json full response after is done processing
          return response.json();
        }).then((data)=>{
          //return value from above
          this.setState({
            id: (this.state.id + 1)%this.state.courses.length,
            userInput: ''
          })
          
          //debugging log: prints the user's input
          console.log(userAnswer);
          //debugging: prints points earned
          console.log(data.validateRes.pointsEarned);

          //reloads audio player
          this.refreshMediaPlayer();
        });
    }

    renderMediaPlayer() {
        return !this.state.mediaPlayerHidden && (
            <audio id='audio_track' controls preload='auto'>
                <source id="mp3" src={this.getCurrentCourse().audioPath}/>
            </audio>
        )
    }

    render() {

        // if the user is not logged in, tell them to do so
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

        // if component is still loading, say so
        // otherwise, render page
        return this.state.loading
            ? (<div className={classes('page_container','flex_container')}>Loading...</div>)
            : (<div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_container', 'flex_container')}>

                <div className={classes('exercise_header', 'flex_container')}>
                    <Exercise_Header language = {this.state.language} />
                </div>

                <div className={classes('exercise_content', 'flex_container')}>
                    <div className={classes('audio_panel','flex_container')}>

                        <h5 className={classes('blue_text','content_subheader')}>
                        listen to the audio:
                        </h5>

                        {/* AUDIO PLAYER */}
                        <div className={classes('audio_player_container', 'flex_container')}>
                            {this.renderMediaPlayer()}
                        </div>
                    </div>

                    {/* INPUT PANEL */}
                    <div className={classes('input_panel', 'flex_container')}>
                        <div className={styles.user_input}>

                            <h5 className={classes('blue_text', 'content_subheader')}>type what you hear:</h5>

                            <form onSubmit={this.handleSubmit}>

                                <label>
                                    <textarea
                                        id="textarea"
                                        name='userInput'
                                        placeholder='type here...'
                                        value={this.state.userInput}
                                        onChange={this.handleUserInputChange}
                                        className={styles.user_input_area}
                                        spellCheck='false' />
                                </label>

                              <input type='submit' value='enter' className={styles.enter_button}/>

                            </form>

                            {/* TOOLTIP */}
                            <div className={styles.tooltip_feedback}>
                                <Tooltip />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
