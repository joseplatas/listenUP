import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../../shared/shared_fns.js'


import './img/icon_en.png'
import './img/icon_fr.png'
import './img/icon_es.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Exercise_Header extends React.Component {
    render() {
        return <div className={classes('exercise_header')}>

            <div className={classes('exercise_header_icons', 'flex_container')}>
                <div className={classes('language_icon', 'header_icon')}>
                    <img src='/app/exercises/shared/exercise_header/img/icon_en.png' className={styles.icon_img} />
                </div>


                <div className={classes('score_icon', 'header_icon')}>
                    {fns.calcScore(.7)}
                </div>
            </div>
        </div>
    }
}