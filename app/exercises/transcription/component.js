import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './transcription.css'
import * as fns from './fns.js'
import '../shared/img/icon_speaker_blue.png'
import '../shared/img/icon_en.png'
import '../shared/img/audio_controls_play.png'
import '../shared/img/audio_controls_pause.png'
import '../shared/img/audio_controls_stop.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

function classes(...classNames) {
    return classNames
        .map(cn => styles[cn])
        .join(' ')
}

export class Transcription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: (this.state || {}).userInput || 'enter your answer'
        };

        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInputChange(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    handleSubmit(event) {
        
        var userInput = this.state.userInput

        {/*---Alert is only used for testing, remove when functioning---*/}

        fns.changeInputTest(userInput)

        alert(userInput);

        event.preventDefault();
    }

    render() {

       return <div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_header', 'flex_container')}>
                <h4 className={classes('exercise_name', 'blue_text')}>
                    transcription exercise
            </h4>

                <div className={classes('exercise_header_icons', 'flex_container')}>
                    <div className={classes('language_icon', 'header_icon')}>
                        <img src='/app/exercises/shared/img/icon_en.png' className={styles.icon_img} />
                    </div>


                    <div className={classes('score_icon', 'header_icon')}>
                        {fns.getScore(.7)}
                </div>
                </div>

            </div>


            <div className={classes('exercise_content', 'flex_container')}>
                <div className={styles.audio_panel}>
                    <div className={classes('audio_player', 'flex_container')}>
                        <img src='/app/exercises/shared/img/icon_speaker_blue.png' />
                    </div>

                    <div className={classes('audio_controls', 'flex_container')}>
                        <img src='/app/exercises/shared/img/audio_controls_play.png' className={styles.audio_button} />
                        <img src='/app/exercises/shared/img/audio_controls_pause.png' className={styles.audio_button} />
                        <img src='/app/exercises/shared/img/audio_controls_stop.png' className={styles.audio_button} />
                    </div>
                </div>

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


                        <ul className={classes('char_bar', 'fr_chars', 'flex_container')}>

                            <li><a href="#" className={styles.char_button}>à</a></li>
                            <li><a href="#" className={styles.char_button}>â</a></li>
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

{/* ----TEMPORARILY COMMENTING OUT FOR STYLING---
    
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

                            <h5 className={classes('blue_text', 'tooltip_header')}>here's a tip</h5>
                            <p>You can skip fillers sounds like 'umm...' and 'uhh...',
                        but remember to include filler <em>words</em> such as
                        'like' and 'well.'
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}