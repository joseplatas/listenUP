
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from 'styles.css'

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
import { Credits } from './credits/component.js'
import { Header } from './shared/header/header.js'
import { Footer } from './shared/footer/component.js'

export class MainLayout extends React.Component {
    render() {
        return <div id = "app">

            <div className='app_container'>

                <Header/>

                <div id='body'>
                    <Switch>
                        {/*---ROUTING TO USER COMPONENTS---*/}
                        <Route path='/login' component={user.default.Login} />
                        <Route path='/signup' component={user.default.Signup} />
                        <Route path='/dashboard' component={user.default.Dashboard} />
                        <Route path='/settings' component={user.default.Settings} />
                        <Route path='/credits' component={Credits} />
                        {/*---ROUTING TO EXERCISE COMPONENTS---*/}
                        {/*:lang is a parameter that needs to be send*/}
                        <Route path='/transcription/:language' component={Transcription} />
                        <Route path='/quiz/:language' component={Quiz}/>
                        {/*---ROUTING TO HOME PAGE---*/}
                        <Route path='/' component={Home} />
                    </Switch>
                </div>

                <Footer/>

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
