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
    };

    displayHeader(){
      switch (this.props.language) {
        case "en":
          return(
            <div className={classes('exercise_header')}>
              <h2 className={classes('exercise_name', 'blue_text')}>
                  transcription exercise
              </h2>
                <div className={classes('exercise_header_icons', 'flex_container')}>
                    <div className={classes('language_icon', 'header_icon')}>
                        <img src='/app/exercises/shared/exercise_header/img/icon_en.png' className={styles.icon_img} />
                    </div>
                    <div className={classes('score_icon', 'header_icon')}>
                        {fns.calcScore(.7)}
                    </div>
                </div>
            </div>
          )
          break;
        case "es":
          return(
            <div className={classes('exercise_header')}>
              <h2 className={classes('exercise_name', 'blue_text')}>
                ejercicio de transcripcion
              </h2>
                <div className={classes('exercise_header_icons', 'flex_container')}>
                    <div className={classes('language_icon', 'header_icon')}>
                        <img src='/app/exercises/shared/exercise_header/img/icon_es.png' className={styles.icon_img} />
                    </div>
                    <div className={classes('score_icon', 'header_icon')}>
                        {fns.calcScore(.7)}
                    </div>
                </div>
            </div>

          );
        break;
        case "fr":
          return (
            <div className={classes('exercise_header')}>
              <h2 className={classes('exercise_name', 'blue_text')}>
                exercice de transcription
              </h2>
                <div className={classes('exercise_header_icons', 'flex_container')}>
                    <div className={classes('language_icon', 'header_icon')}>
                        <img src='/app/exercises/shared/exercise_header/img/icon_fr.png' className={styles.icon_img} />
                    </div>
                    <div className={classes('score_icon', 'header_icon')}>
                        {fns.calcScore(.7)}
                    </div>
                </div>
            </div>
          );
          break;
        default:

      }
    }

    render() {
        return (
          this.displayHeader()
        );
    }
}
