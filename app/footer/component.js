import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'

import { generateClassHelper } from '../shared/shared_fns.js'
import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

const classes = generateClassHelper(styles)

export class Footer extends React.Component {

    render() {
        return <footer className={styles.app_footer}>

            <Link to='/credits' className={styles.credits_link}>Credits</Link>
            
            <p className={styles.footer_text}>© 2017 ListenUp Inc.</p>

        </footer>
    }
}