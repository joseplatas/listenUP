import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './transcription.css'
import icon_speaker from '../shared/img/icon_speaker_blue.png'
import icon_en from '../shared/img/icon_en.png'
import playButton from '../shared/img/audio_controls_play.png'
import pauseButton from '../shared/img/audio_controls_pause.png'
import stopButton from '../shared/img/audio_controls_stop.png'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

function classes(...classNames) {
    return classNames
        .map(cn => styles[cn])
        .join(' ')
}

export const Transcription=() => (


        <div className={classes('page-container', 'flex-container')}>

            <div className={classes('exercise-header', 'flex-container')}>
                    <h4>
                        transcription exercise
                    </h4>

                    <div className={classes('exercise-header-icons', 'flex-container')}>
                        <div className={classes('language-icon', 'icon')}>
                            <img src={icon_en}/>
                        </div>
                        
                        <div className={classes('score-icon', 'icon')}>
                            <p className="score">9</p>
                        </div>


            <div className={classes('exercise-content', 'flex-container')}>
                <div className={classes('audio-panel')}>
                    <div className={classes('audio-player', 'flex-container')}>
                        <img src={icon_speaker}/>
                    </div>

                    <div className={classes('audio-controls', 'flex-container')}>
                        <img src={playButton} className={classes('audio-button')}/>
                        <img src={pauseButton} className={classes('audio-button')}/>
                        <img src={stopButton} className={classes('audio-button')}/>
                    </div>
                </div>

                <div className={classes('input-panel', 'flex-container')}>


                    <div className={classes('user-input')}>

                        <h5>type what you hear:</h5>

                        <textarea name="user-input" spellCheck="false"></textarea>
                    
                        <ul className={classes('char-bar', 'fr-chars', 'flex-container')}>

                            <li>à</li>
                            <li>â</li>
                            <li>é</li>
                            <li>ê</li>
                            <li>è</li>
                            <li>ë</li>
                            <li>î</li>
                            <li>ô</li>
                            <li>oe</li>
                            <li>û</li>
                            <li>ù</li>
                            <li>ç</li>

                        </ul>

                        <ul className={classes('char-bar', 'es-chars', 'flex-container')}>

                            <li>á</li>
                            <li>é</li>
                            <li>í</li>
                            <li>ó</li>
                            <li>ú</li>
                            <li>ñ</li>
                            <li>ü</li>
                            <li>¡</li>
                            <li>¿</li>

                        </ul>

                    </div>

                    <div className={classes('enter-button')}>
                        <h5>enter</h5>
                    </div>

                    <div className={classes('tooltip')}>

                        <h5>here's a tip</h5>

                        <p>You can skip fillers sounds like "umm..." and "uhh...",
                            but remember to include filler <em>words</em> such as
                            "like" and "well."
                        </p>


                    </div>

                </div>
            </div>
            </div>
        </div>
    </div>

)