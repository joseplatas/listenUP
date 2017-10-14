
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
import * as user from './user/index.js'
import { Home } from './home/component.js'
import { Credits } from './home/credits/component.js'

export class MainLayout extends React.Component {
    render() {
        return <div>
            <div id='body'>
                <Switch>
                    {/*---ROUTING TO USER COMPONENTS---*/}
                    <Route path='/login' component={user.Login} />
                    <Route path='/signup' component={user.Signup} />
                    <Route path='/dashboard' component={user.Dashboard} />
                    <Route path='/settings' component={user.Settings} />
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