import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../shared/shared_fns.js'
import { Exercise_Header } from '../shared/exercise_header/component.js'
import { Audio_Panel } from '../shared/audio_panel/component.js'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

function getQuizQuestion() {
    return 'This is a test question'
}


export class Quiz extends React.Component {

    render() {

      if(localStorage.user_id == undefined){
        return(
          <div className={classes('page_container', 'flex_container')}>
            <div className={classes('center_container')}>
                <h1>
                  <center>
                    Please login to see this exercise <Link to='/Login' className={styles.login_link}>here</Link>
                  </center>
                </h1>

            </div>
          </div>
        );
      }

        return <div className={classes('page_container', 'flex_container')}>

            <div className={classes('exercise_container', 'flex_container')}>
                <div className={classes('exercise_header', 'flex_container')}>
                    <h2 className={classes('exercise_name', 'blue_text')}>
                        quiz exercise
                    </h2>
                    <Exercise_Header />
                </div>


                <div className={classes('exercise_content', 'flex_container')}>

                    <Audio_Panel />

                    <div className={classes('input_panel', 'flex_container')}>


                        <div className={styles.user_input}>

                            <h5 className={classes('blue_text', 'input_header')}>{getQuizQuestion()}</h5>

                            <div className={classes('quiz_btns_container', 'flex_container')}>
                                <a className={classes('quiz_option')} href="#">First answer to the question
                            which has a bit of a long answer, possibly two lines?
                                </a>
                                <a className={classes('quiz_option')} href="#">Second answer to the question</a>
                                <a className={classes('quiz_option')} href="#">Third answer to the question</a>
                                <a className={classes('quiz_option')} href="#">Fourth answer to the question</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}
