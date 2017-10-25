import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../../shared/shared_fns.js'

/*---Images---*/
import './img/badges_q_5correctStreak.png'
import './img/badges_q_noReplay.png'
import './img/badges_tr_10score.png'
import './img/badges_tr_10scoreStreak.png'
import './img/badges_lang_medal_en.png'
import './img/badges_lang_medal_es.png'
import './img/badges_lang_medal_fr.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Achievements extends React.Component {

    render() {
        return <div className={classes('flex_container', 'achievements_container')}>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src='/app/user/dashboard/achievements/img/badges_q_5correctStreak.png' className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    On Fire
                </h4>
                <p className={classes('achievement_Description')}>
                    Scored 5 correct Quiz answers in a row!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src='/app/user/dashboard/achievements/img/badges_q_noReplay.png' className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    No Replays
                </h4>
                <p className={classes('achievement_Description')}>
                    Got a Quiz answer correct without replaying the audio!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src='/app/user/dashboard/achievements/img/badges_tr_10score.png' className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    That's a 10
                </h4>
                <p className={classes('achievement_Description')}>
                    Scored a perfect 10 on a Transcription Exercise!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src='/app/user/dashboard/achievements/img/badges_tr_10scoreStreak.png' className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Triple Threat
                </h4>
                <p className={classes('achievement_Description')}>
                    3 Perfect 10s in a row on Transcription!
                </p>
            </div>

        </div>
    }
}