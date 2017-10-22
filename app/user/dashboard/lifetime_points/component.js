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

export class Lifetime_Points extends React.Component {

    render() {
        return <div className={classes('lifetime_points_container','flex_container')}>

            <h2 className={styles.lifetime_points_header}>
                lifetime points earned:
            </h2>

            <h1 className={styles.lifetime_points}>
                {fns.getLifetimePoints()}
            </h1>

        </div>
    }

}