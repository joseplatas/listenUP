import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

export class Transcription extends React.Component {
    render() {
        return  <div>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li><Link to='/LandingPage'>Log Out</Link></li>
                </ul>
            </nav>
            <h2>transcription</h2>
         </div>

    }
}