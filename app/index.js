
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

{/*---ROUTING TABLE---*/}

import { Transcription } from './exercises/transcription/component.js'
import { Quiz } from './exercises/quiz/component.js'
import { Login } from './user/login/component.js'
import { Signup } from './user/signup/component.js'
import { LandingPage } from './landing/component.js'
import { Dashboard } from './user/dashboard/component.js'
import { Settings } from './user/settings/component.js'
import { Credits } from './landing/credits/component.js'


export class MainLayout extends React.Component {
    render() {
        return <div>
            <div id='body'>
                <Switch>
                    {/*---ROUTING TO USER COMPONENTS---*/}
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/credits' component={Credits} />
                    {/*---ROUTING TO EXERCISE COMPONENTS---*/}
                    <Route path='/transcription' component={Transcription} />
                    <Route path='/quiz' component={Quiz}/>
                    {/*---ROUTING TO HOME PAGE---*/}
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