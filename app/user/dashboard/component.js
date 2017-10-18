import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import icon_en from './img/icon_en.png'
import icon_es from './img/icon_es.png'
import icon_fr from './img/icon_fr.png'
import achievement_1 from './img/achievement_1.svg'
import achievement_2 from './img/achievement_2.svg'
import achievement_3 from './img/achievement_3.svg'
import { Link } from 'react-router-dom'

export const Dashboard =() =>

<div>
    <div id="main">
        <div className="page_wrap">

        <div className="dashboard">
            <div className="box_wrap language_progress">
            <h2>Languages in progress:</h2>
            <ul>
                <li>
                <img src={icon_en} alt=""/>
                <p>English</p>
                </li>
                <li>
                <img src={icon_es} alt=""/>
                <p>Spanish</p>
                </li>
                <li>
                <img src={icon_fr} alt=""/>
                <p><Link to="./transcription">French</Link></p>
                </li>
            </ul>
            </div>

            <div className="box_wrap total_points">
            <h2>Lifetime points earned:</h2>

            <div className="points">
                382
            </div>
            </div>

            <div className="box_wrap achievements">
            <h2>Achiements:</h2>
            <ul>
                <li>
                <img src={achievement_1} alt=""/>
                <p>Achievement 1</p>
                </li>
                <li>
                <img src={achievement_2} alt=""/>
                <p>Achievement 1</p>
                </li>
                <li>
                <img src={achievement_3} alt=""/>
                <p>Achievement 1</p>
                </li>
                <li>
                <img src={achievement_1} alt=""/>
                <p>Achievement 1</p>
                </li>
                <li>
                <img src={achievement_2} alt=""/>
                <p>Achievement 1</p>
                </li>
                <li>
                <img src={achievement_3} alt=""/>
                <p>Achievement 1</p>
                </li>
                <li>
                <img src={achievement_1} alt=""/>
                <p>Achievement 1</p>
                </li>
            </ul>
            </div>

            <div className="box_wrap stats">
            <h2>Statistics:</h2>

            <ul>
                <li>
                <div className="time">
                    4<span>hours</span>
                </div>
                <p>Time spend learning</p>
                </li>
                <li>
                <div className="time">
                    90%<span></span>
                </div>
                <p>Percent of Correct answers</p>
                </li>
                <li>
                <div className="time">
                    30<span>minutes</span>
                </div>
                <p>Time skipped</p>
                </li>
            </ul>


            </div>

        </div>

        </div>
    </div>
</div>