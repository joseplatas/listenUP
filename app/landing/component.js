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
    <div>
        <h1>listenUP</h1>
        <div id='header'>
            <ul>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/transcription'>First Exercise</Link></li>
            </ul>
        </div>
    </div>