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

    constructor(props){
        super(props);
        /*
        transcription exercise
        ejercicio de transcripcion
        exercice de transcription
        */
    };

    render() {
        return(
            <div className={classes('exercise_header')}>
              <h2 className={classes('exercise_name', 'blue_text')}>
                  {this.props.title}
              </h2>
                <div className={classes('exercise_header_icons', 'flex_container')}>
                    <div className={classes('language_icon', 'header_icon')}>
                        <img src={`/app/exercises/shared/exercise_header/img/icon_${this.props.language}.png`} className={styles.icon_img} />
                    </div>
                    <div id="score" className={classes('score_icon', 'header_icon')}>
                        {this.props.score}
                    </div>
                </div>
            </div>
          )
    }
}
