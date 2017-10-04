import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

export const LandingPage = () =>
    <div id='body'>
        <div id='header'>
            <ul>
                <li><Link to='/login'>Log In</Link></li>
            </ul>
            <h1>listenUP</h1>
        </div>

        <div className='panel_slateBG'>

                <h2>Practice your listening comprehension by listening to how native speakers <em>actually</em> talk.</h2>

                <div id='getStartedButton'>
                    <Link to='/signup'>Get Started</Link> 
                </div>

            </div>

        <div className='panel_whiteBG'>

            <h4>So, you still can't understand anything that native speakers are saying. Welcome to the "Intermediate Hell" of language learning.</h4>

            {/*--- PARTS OF "ABOUT" FOLLOW HERE---*/}

            </div>
        
        <div className='panel_mintBG'>

            <h3>How it works</h3>

            {/*--- PARTS OF "HOW IT WORKS" FOLLOW HERE---*/}

            </div>

    </div>