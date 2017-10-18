import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'

export class Quiz extends React.Component {
    render() {
        return <div>

            <div className="page-container flex-container">

                <div className="exercise-header flex-container">

                    <h4>quiz exercise</h4>

                    <div className="exercise-header-icons flex-container">

                        <div className="language-icon icon"/>
                            <img src="img/icon_fr.png"/>
                        </div>

                        <div className="score-icon icon"/>
                            <p className="score">9</p>
                        </div>

                </div>

                <div className="exercise-content flex-container">

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

                    <div className="answer-panel flex-container">

                        <h5 className="quiz-question">[Question that needs to be answered about the audio]?</h5>

                        <a className="answer-choice" href="#">First answer to the question
                            which has a bit of a long answer, possibly two lines?
                        </a>
                        <a className="answer-choice" href="#">Second answer to the question</a>
                        <a className="answer-choice" href="#">Third answer to the question</a>
                        <a className="answer-choice" href="#">Fourth answer to the question</a>
                        
                    </div>
                </div>
        </div>
    }
}