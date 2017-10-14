import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

export const Transcription=() => (

<div className="transcription">
        <header className="page-header flex-container">
            <div className="page-header-logo"><img src="img/ListenUp_logo_white.png"/></div>

            <ul className="page-header-buttons flex-container">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>

        </header>

        <section className="page-container flex-container">

            <div className="exercise-header flex-container">
                    <h4>
                        transcription exercise
                    </h4>

                    <div className="exercise-header-icons flex-container">
                        <div className="language-icon icon"/>
                            <img src="img/icon_fr.png"/>
                        </div>
                        
                        <div className="score-icon icon"/>
                            <p className="score">9</p>
                        </div>
            </section>

            <section className="exercise-content flex-container">
                <div className="audio-panel">
                    <div className="audio-player flex-container">
                        <img src="img/icon_speaker_blue.png"/>
                    </div>

                    <div className="audio-controls flex-container">
                        <img src="img/audio_controls_play.png" className="audio-button"/>
                        <img src="img/audio_controls_pause.png" className="audio-button"/>
                        <img src="img/audio_controls_stop.png" className="audio-button"/>
                    </div>
                </div>

                <div className="input-panel flex-container">


                    <div className="user-input">

                        <h5>type what you hear:</h5>

                        <textarea name="user-input" spellcheck="false"></textarea>
                    
                        <ul className="char-bar fr-chars flex-container">

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

                        <ul className="char-bar es-chars flex-container">

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

                    <div className="enter-button">
                        <h5>enter</h5>
                    </div>

                    <div className="tooltip">

                        <h5>here's a tip</h5>

                        <p>You can skip fillers sounds like "umm..." and "uhh...",
                            but remember to include filler <em>words</em> such as
                            "like" and "well."
                        </p>


                    </div>

                </div>
            </section>

        </div>
)