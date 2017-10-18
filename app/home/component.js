import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './home.css'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

export const Home=() =>

    <div className="wrapper">

        <header>
            <img src="/#/home/img/ListenUp_logo_white.png" className="logo"/>
            <div className="header-buttons">
                <ul>
                    <li className="button loginButton"><a href="#">Login</a></li>
                </ul>
            </div>
        </header>

        <section className="intro">
            <div className="content">

                <h1 className="whiteHeader">Practice your listening comprehension
                    by listening to how natives <strong>actually</strong> talk.
                </h1>

                <div className="centerButton signupButton">
                    <Link to='/Transcription'>Get Started</Link>
                </div>

            </div>
        </section>

        <section className="about">
            <div className="content">

                <h2>So, you still can’t understand anything that native speakers are saying.
                    Welcome to the <em>«Intermediate Hell»</em> of language learning.</h2>
                <h1 className="blueHeader">It's time to listenUP.</h1>

                <div className="column-container">

                    <div className="col">
                        <h4>real speakers.</h4>
                        <p>Listen to audio clips of native
                            speakers in your target language
                            as they answer questions or
                            discuss everyday topics.</p>
                    </div>

                    <div className="col">
                        <h4>real talk.</h4>
                        <p>Ditch the scripted conversations
                            for beginners and get a feel for how
                            natives truly express themselves,
                            like, um... filler words and all!</p>
                    </div>

                    <div className="col">
                        <h4>real effective.</h4>
                        <p>All 2 of our test subjects have
                            agreed that listenUp is helpful.
                            That’s, like, half of our entire
                            development team!</p>
                    </div>

                </div>
            </div>
        </section>

        <section className="howitworks">
            <div className="content">
                <h3>how it works</h3>

                <div className="column-container">

                        <div className="col">
                            <img src ="img/how_screenshot.png"/>
                            <h4>listen.</h4>
                            <p>We'll play short clips of native speakers
                                having natural conversations, answering
                                interview questions, or doing skits.
                            </p>
                        </div>

                        <div className="col">
                            <img src ="img/how_screenshot.png"/>

                            <h4>answer.</h4>
                            <p>We offer two exercises: Transcription and Quiz.
                                You'll either transcribe the given audio clip or
                                take a mini-quiz on the content presented.
                            </p>
                        </div>

                        <div className="col">
                            <img src ="img/how_screenshot.png"/>
                            <h4>learn.</h4>
                            <p>Get scored based on your answer. Review exercises
                                and improve over time with repetition. You'll be
                                listening like a pro in no time!
                            </p>
                        </div>

                    </div>

            </div>
        </section>

    <footer>
        <a href="#" className="whiteLink">Credits</a>
    </footer>

    </div>
