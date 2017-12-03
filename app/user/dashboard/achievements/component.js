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
import './img/badges_lang_medal_ALL.png'
import './img/badges_q_5correctStreak_bw.png'
import './img/badges_q_noReplay_bw.png'
import './img/badges_tr_10score_bw.png'
import './img/badges_tr_10scoreStreak_bw.png'
import './img/badges_lang_medal_en_bw.png'
import './img/badges_lang_medal_es_bw.png'
import './img/badges_lang_medal_fr_bw.png'
import './img/badges_lang_medal_ALL_bw.png'
 
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

//applies a color filter if the achievement has not been unlocked.
function color(achievement, src) {
    return achievement 
        ? src
        : src.replace(/\.png$/, '_bw.png') //change it to the bw version if achievement is false.
}

/*  ----note by JT----
    should call a function to determine which achievements the user has before displaying
    the achievements below are only for mockup purposes
*/

export class Achievements extends React.Component {
    render() {
        const a = this.props.achievements //shorter nickname for easier typing.

        return <div className={classes('flex_container', 'achievements_container')}>

            

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.quiz_finishedOne, '/app/user/dashboard/achievements/img/badges_q_noReplay.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Quiz Wiz
                </h4>
                <p className={classes('achievement_Description')}>
                    Answer a quiz question correctly!
                </p>
            </div>
            {/* ---------- begin single achievement ---------- */}
            <div className={classes('achievement_container', 'flex_container')}>
                {/* achievement thumbnail */}
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.quiz_fiveCorrect, '/app/user/dashboard/achievements/img/badges_q_5correctStreak.png')} className={classes('thumbnail')} />
                </div>

                {/* achievement name */}
                <h4 className={classes('achievement_Name')}>
                    On Fire
                </h4>

                {/* achievement description */}
                <p className={classes('achievement_Description')}>
                    Score 5 correct Quiz answers in a row!
                </p>
            </div>
            {/* ---------- end single achievement ---------- */}
            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.trans_singleTen, '/app/user/dashboard/achievements/img/badges_tr_10score.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    That's a 10
                </h4>
                <p className={classes('achievement_Description')}>
                    Score a perfect 10 on a Transcription Exercise!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.trans_tripleTens, '/app/user/dashboard/achievements/img/badges_tr_10scoreStreak.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Triple Threat
                </h4>
                <p className={classes('achievement_Description')}>
                    3 Perfect 10s in a row on Transcription!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.en_perfect, '/app/user/dashboard/achievements/img/badges_lang_medal_en.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Excellent in English
                </h4>
                <p className={classes('achievement_Description')}>
                    Complete all English exercises with a perfect 10 score!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.fr_perfect, '/app/user/dashboard/achievements/img/badges_lang_medal_fr.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Fantastic in French
                </h4>
                <p className={classes('achievement_Description')}>
                    Complete all French exercises with a perfect 10 score!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.es_perfect, '/app/user/dashboard/achievements/img/badges_lang_medal_es.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Super in Spanish
                </h4>
                <p className={classes('achievement_Description')}>
                    Complete all Spanish exercises with a perfect 10 score!
                </p>
            </div>

            <div className={classes('achievement_container', 'flex_container')}>
                <div className={classes('thumbnail_container')}>
                    <img src={color(a.perfect, '/app/user/dashboard/achievements/img/badges_lang_medal_ALL.png')} className={classes('thumbnail')} />
                </div>
                <h4 className={classes('achievement_Name')}>
                    Globetrotter
                </h4>
                <p className={classes('achievement_Description')}>
                    Complete all exercises in every language with a perfect 10 score!
                </p>
            </div>

        </div>
    }
}