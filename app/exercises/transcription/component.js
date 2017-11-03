import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../shared/shared_fns.js'
import { Exercise_Header } from '../shared/exercise_header/component.js'
import { Audio_Panel } from '../shared/audio_panel/component.js'
import { Tooltip } from './tooltip/component.js'

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
            userInput: (this.state || {}).userInput || 'enter your answer',
            user_answer: [] //array to keep user answer 
        };
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInputChange(event) {
        this.setState({userInput: event.target.value})
    }

    handleSubmit(event) { 
        //for reference https://stackoverflow.com/questions/42569899/storing-numbers-entered-via-an-input-form-into-an-array
        var answer = this.state.value;
        var allAnswer = this.state.user_answer.concat([userInput]); //stores user answer to be concatted to user_answer
        this.setState({user_answer: allAnswer});
        this.setState({userInput: ''}); //clears input on submit
        event.preventDefault();
    }

    render() {
        console.log(this.state.user_answer);
        return <div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_container', 'flex_container')}>

                <div className={classes('exercise_header', 'flex_container')}>
                    <h2 className={classes('exercise_name', 'blue_text')}>
                        transcription exercise
                </h2>
                    <Exercise_Header />
                </div>


                <div className={classes('exercise_content', 'flex_container')}>

                    <Audio_Panel />

                    <div className={classes('input_panel', 'flex_container')}>


                        <div className={styles.user_input}>

                            <h5 className={classes('blue_text', 'input_header')}>type what you hear:</h5>

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
                                <input
                                    type='submit'
                                    value='enter'
                                    className={styles.enter_button}
                                />
                                
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