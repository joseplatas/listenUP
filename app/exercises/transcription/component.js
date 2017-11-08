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
        this.state = {
            language: this.props.match.params.language, //pass as param in url
            courses: this.getCourses(),
            userInput: (this.state || {}).userInput || 'enter your answer',
            user_answer: [] //array to keep user answer
        };
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //get the courses for the language
        this.state.courses = this.getCourses();

    }
    /**
      Returns courses base on the language
    */
    getCourses(){
      fetch(new Request('http://localhost:8080/api/exercises/getCourses', {
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

    handleSubmit(event) {
        //for reference https://stackoverflow.com/questions/42569899/storing-numbers-entered-via-an-input-form-into-an-array
        event.preventDefault();
        var answer = this.state.userInput;
        // JT changed "userInput" to "answer" in this concat call
        var allAnswer = this.state.user_answer.concat([answer]); //stores user answer to be concatted to user_answer
        // JT added console.log to test -- returning undefined
        console.log(allAnswer);
        this.setState({user_answer: allAnswer});
        this.setState({userInput: ''}); //clears input on submit
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

        return <div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_container', 'flex_container')}>

                <div className={classes('exercise_header', 'flex_container')}>
                    <Exercise_Header language = {this.state.language} />
                </div>


                <div className={classes('exercise_content', 'flex_container')}>

                    <div className={classes('audio_panel','flex_container')}>

                        <h5 className={classes('blue_text','content_subheader')}>
                        listen to the audio:
                        </h5>

                        <div className={classes('audio_player_container', 'flex_container')}>
            
                        {/* <div className={classes('player_img_container')}>
                            <img src='/app/exercises/shared/audio_panel/img/icon_speaker_blue.png' className={classes('player_img')}/> */}

                            <audio id='audio_track' controls preload='auto'>
                                <source src='/app/exercises/shared/audio_panel/audio/en_04.mp3'/>
                                </audio>
                        {/* </div> */}


                        </div>

                        <div className={classes('audio_controls', 'flex_container')}>
                            <button id='btn_play' className={styles.audio_button}>
                                <img src='/app/exercises/shared/img/audio_controls_play.png' className={styles.btn_img}/>
                            </button>
                            <button id='btn_pause' className={styles.audio_button}>
                                <img src='/app/exercises/shared/img/audio_controls_pause.png' className={styles.btn_img}/>
                            </button>
                            <button id='btn_stop' className={styles.audio_button}>
                                <img src='/app/exercises/shared/img/audio_controls_stop.png' className={styles.btn_img}/>
                            </button>
                        </div>

                    </div>

                    <div className={classes('input_panel', 'flex_container')}>


                        <div className={styles.user_input}>

                            <h5 className={classes('blue_text', 'content_subheader')}>type what you hear:</h5>

                            <form onSubmit={this.handleSubmit}>

                                <label>
                                    <textarea
                                        name='userInput'
                                        placeholder='type here...'
                                        value={this.state.value}
                                        onChange={this.handleUserInputChange}
                                        className={styles.user_input_area}
                                        spellCheck='false' />
                                </label>

                                {/* ----TEMPORARILY COMMENTING OUT FOR STYLING---

                            <ul className={classes('char_bar', 'fr_chars', 'flex_container')}>

                                <li><a href="#" className={styles.char_button}>à</a></li>
                                <li><a href="#" c assName={styles.char_button}>â</a></li>
                                <li><a href="#" className={styles.char_button}>é</a></li>
                                <li><a href="#" className={styles.char_button}>ê</a></li>
                                <li><a href="#" className={styles.char_button}>è</a></li>
                                <li><a href="#" className={styles.char_button}>ë</a></li>
                                <li><a href="#" className={styles.char_button}>î</a></li>
                                <li><a href="#" className={styles.char_button}>ô</a></li>
                                <li><a href="#" className={styles.char_button}>oe</a></li>
                                <li><a href="#" className={styles.char_button}>û</a></li>
                                <li><a href="#" className={styles.char_button}>ù</a></li>
                                <li><a href="#" className={styles.char_button}>ç</a></li>

                            </ul>


                        <ul className={classes('char_bar', 'es_chars', 'flex_container')}>

                            <li><a href="#" className={styles.char_button}>á</a></li>
                            <li><a href="#" className={styles.char_button}>é</a></li>
                            <li><a href="#" className={styles.char_button}>í</a></li>
                            <li><a href="#" className={styles.char_button}>ó</a></li>
                            <li><a href="#" className={styles.char_button}>è</a></li>
                            <li><a href="#" className={styles.char_button}>ú</a></li>
                            <li><a href="#" className={styles.char_button}>ñ</a></li>
                            <li><a href="#" className={styles.char_button}>ü</a></li>
                            <li><a href="#" className={styles.char_button}>¡</a></li>
                            <li><a href="#" className={styles.char_button}>¿</a></li>

                        </ul>
*/}
                              <input type='submit' value='enter' className={styles.enter_button}/>

                            </form>

                            <div className={styles.tooltip_feedback}>
                                <Tooltip />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
