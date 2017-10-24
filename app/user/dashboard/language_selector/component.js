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

                <Link to='/transcription' className={classes('flex_container','language')}>
                    <img src='/app/user/dashboard/language_selector/img/icon_en.png' className={styles.lang_icon} />
                    <p className={styles.lang_link}>english</p>
                </Link>

                <Link to='/transcription' className={classes('flex_container','language')}>
                    <img src='/app/user/dashboard/language_selector/img/icon_fr.png' className={styles.lang_icon} />
                    <p className={styles.lang_link}>french</p>
                </Link>

                <Link to='/transcription' className={classes('flex_container','language')}>
                    <img src='/app/user/dashboard/language_selector/img/icon_es.png' className={styles.lang_icon} />
                    <p className={styles.lang_link}>spanish</p>
                </Link>

            </div>

        </div>

    }

}