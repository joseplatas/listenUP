
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

import { Transcription } from './exercises/transcription/component.js'
import { Login } from './user/login/component.js'
import { LandingPage } from './landing/component.js'

export class MainLayout extends React.Component {
    render() {
        return <div>
            <div id='body'>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/transcription' component={Transcription} />
                    <Route path='/' component={LandingPage} />
                </Switch>
            </div>
        </div> 
    } 
}

ReactDOM.render(
    <HashRouter>
        <MainLayout />
    </HashRouter>,
    document.getElementById('app')
)