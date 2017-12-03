import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import * as fns from './fns.js'
import { generateClassHelper } from '../../../shared/shared_fns.js'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Statistics extends React.Component {

    render() {
        return <div className={classes('flex_container', 'statistics_container')}>

        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
                {this.props.statistics.lifetimePoints}
            </h3>
            <p className={classes('stats_tooltip')}>
            lifetime points earned
            </p>
        </div>

        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
                {Math.round(10 * this.props.statistics.averageScore) / 10}
            </h3>
            <p className={classes('stats_tooltip')}>
                average score
            </p>
        </div>

        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
                {this.props.statistics.completedExercises}
            </h3>
            <p className={classes('stats_tooltip')}>
            exercises completed
            </p>
        </div>

        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
                {this.props.statistics.longestStreak}
            </h3>
            <p className={classes('stats_tooltip')}>
            longest streak
            </p>
        </div>

        


        </div>
    }
}