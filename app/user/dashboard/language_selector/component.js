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

export class Language_Selector extends React.Component {

    render() {

        return <div className={classes('component_container', 'flex_container')}>

            <div className={classes('languages_container', 'flex_container')}>

            <div className={classes('language_container','flex_container')}>

                <div className={classes('lang_thumbnail')}>
                    <img src='/app/user/dashboard/language_selector/img/icon_en.png' className={styles.lang_icon} />
                </div>

                <div className={classes('exercise_selectors_container','flex_container')}>
                    <Link to='/transcription' className={classes('exercise_link','space_bottom')}>transcription</Link>
                    <Link to='/quiz' className={classes('exercise_link','space_bottom')}>quiz</Link>
                </div>
            </div>

            <div className={classes('language_container','flex_container')}>

                <div className={classes('lang_thumbnail')}>
                    <img src='/app/user/dashboard/language_selector/img/icon_fr.png' className={styles.lang_icon} />
                </div>

                <div className={classes('exercise_selectors_container','flex_container')}>
                    <Link to='/transcription' className={classes('exercise_link','space_bottom')}>transcription</Link>
                    <Link to='/quiz' className={classes('exercise_link','space_bottom')}>quiz</Link>
                </div>
            </div>

            <div className={classes('language_container','flex_container')}>

                <div className={classes('lang_thumbnail')}>
                    <img src='/app/user/dashboard/language_selector/img/icon_es.png' className={styles.lang_icon} />
                </div>

                <div className={classes('exercise_selectors_container','flex_container')}>
                    <Link to='/transcription' className={classes('exercise_link','space_bottom')}>transcription</Link>
                    <Link to='/quiz' className={classes('exercise_link','space_bottom')}>quiz</Link>
                </div>
            </div>

            </div>

        </div>

    }

}