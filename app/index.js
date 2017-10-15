
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from 'styles.css'
import logo from './shared/img/ListenUp_logo_white.png'

import {
    HashRouter,
    Route,
    Link,
    Switch
  } from 'react-router-dom'

{/*---ROUTING TABLE---*/}

import { Transcription } from './exercises/transcription/component.js'
import { Quiz } from './exercises/quiz/component.js'
import * as user from './user/index.js'
import { Home, NavButtons as HomeNavButtons } from './home/component.js'
import { Credits } from './home/credits/component.js'

export class MainLayout extends React.Component {
    render() {
        return <div>
            <header className="page-header flex-container">
                <div className="page-header-logo"><Link to="/"><img src={logo}/></Link></div>

                <ul className="page-header-buttons flex-container">
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log In</a></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Log Out</a></li>
                </ul>
            </header>
            <div id='body'>
                <Switch>
                    {/*---ROUTING TO USER COMPONENTS---*/}
                    <Route path='/login' component={user.default.Login} />
                    <Route path='/signup' component={user.default.Signup} />
                    <Route path='/dashboard' component={user.default.Dashboard} />
                    <Route path='/settings' component={user.default.Settings} />
                    <Route path='/credits' component={Credits} />
                    {/*---ROUTING TO EXERCISE COMPONENTS---*/}
                    <Route path='/transcription' component={Transcription} />
                    <Route path='/quiz' component={Quiz}/>
                    {/*---ROUTING TO HOME PAGE---*/}
                    <Route path='/' component={Home} />
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