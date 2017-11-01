
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './header.css'
import {browserHistory} from 'react-router';
import '../../shared/img/ListenUp_logo_white.png'

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
//kill localStorage
function logOut(){
  localStorage.removeItem("user_id");
  alert("You have been logout");
  window.location.href = ""
}

export const Header = () => (

    <div className={styles.stickyContainer}>
        <header className={classes('page_header', 'flex_container')}>
            <div className={styles.header_logo}>
            <Link to="/">
                <img src='/app/shared/img/ListenUp_logo_white.png' className={styles.logo} />
            </Link></div>

            <ul className={classes('nav_buttons','flex_container')}>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#" onClick={logOut}>Log Out</a></li>
            </ul>
        </header>
    </div>

)
