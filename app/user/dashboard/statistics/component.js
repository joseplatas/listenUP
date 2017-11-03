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

        {/* these should be verified on the user account before displaying. dummy text for mockup provided. */}

        {/* lifetime points */}
        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
            382
            </h3>
            <p className={classes('stats_tooltip')}>
            lifetime points earned
            </p>
        </div>

        {/* minutes spent learning */}
        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
            33
            </h3>
            <p className={classes('stats_tooltip')}>
            minutes spent learning
            </p>
        </div>

        {/* number of exercises completed ('cards') */}
        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
            108
            </h3>
            <p className={classes('stats_tooltip')}>
            exercises completed
            </p>
        </div>

        {/* number of perfect answers */}
        <div className={classes('stat','flex_container')}>
            <h3 className={classes('stats_text')}>
            10
            </h3>
            <p className={classes('stats_tooltip')}>
            perfect 10's scored
            </p>
        </div>

        


        </div>
    }
}