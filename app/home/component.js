import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './home.css'
import whiteLogo from '../shared/img/ListenUp_logo_white.png'
import ss_Listen from './img/howitworks_listen.png'
import ss_Answer from './img/howitworks_type.png'
import ss_Learn from './img/howitworks_learn.png'

import { Link } from 'react-router-dom'

export const NavButtons = () => 
    <div>
        Home buttons go here.
    </div>

export const Home=() =>

    <div className="wrapper">
        
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
                            <img src ={ss_Listen}/>
                            <h4>listen.</h4>
                            <p>We'll play short clips of native speakers 
                                having natural conversations, answering 
                                interview questions, or doing skits.
                            </p>
                        </div>
        
                        <div className="col">
                            <img src ={ss_Answer}/>
                                                
                            <h4>answer.</h4>
                            <p>We offer two exercises: Transcription and Quiz. 
                                You'll either transcribe the given audio clip or 
                                take a mini-quiz on the content presented.
                            </p>                            
                        </div>
        
                        <div className="col">
                            <img src ={ss_Learn}/>                            
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
