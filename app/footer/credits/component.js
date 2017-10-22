import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'
import { generateClassHelper } from '../../shared/shared_fns.js'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Credits extends React.Component {
    render() {
        return <div className={classes('credits_page', 'flex_container')}>

            <h1 className={styles.credits_header}>
                credits
            </h1>

        </div>
    }
}