
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

// export const Header = () => (
export class Header extends React.Component{
  //kill localStorage
  logOut(){
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    alert("You have been logged out");
    window.location.href = "";
  }
  render(){
    //display proper menu
    let menuList;
    if(localStorage.username){
      menuList = (
        <ul className={classes('nav_buttons','flex_container')}>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#" onClick={this.logOut}>Log Out</a></li>
        </ul>
      );
    }else{
      menuList = (
        <ul className={classes('nav_buttons','flex_container')}>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/login'>Log In</Link></li>
        </ul>
      );
    }

    return (
      <div className={styles.stickyContainer}>
          <header className={classes('page_header', 'flex_container')}>
              <div className={styles.header_logo}>
                <Link to="/">
                    <img src='/app/shared/img/ListenUp_logo_white.png' className={styles.logo} />
                </Link>
              </div>

              { menuList }

          </header>
      </div>
    );
  }
}
