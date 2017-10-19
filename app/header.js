
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from 'header.css'
import logo from './shared/img/ListenUp_logo_white.png'

import {
    HashRouter,
    Route,
    Link,
} from 'react-router-dom'

function classes(...classNames) {
    return classNames
        .map(cn => styles[cn])
        .join(' ')
}

export const Header = () => (

    <div className={styles.stickyContainer}>
        <header className={classes('page_header', 'flex_container')}>
            <div className={styles.header_logo}>
            <Link to="/">
                <img src={logo} className={styles.logo} />
            </Link></div>

            <ul className={classes('nav_buttons','flex_container')}>
                <li><Link to='/signup/'>Sign Up</Link></li>
                <li><a href="#">Log In</a></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>
        </header>
    </div>

)