import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from './signup.css'

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

export class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: (this.state || {}).username || 'username',
          email: (this.state || {}).email || 'your email',
          password: (this.state || {}).password || 'password'
        }
        
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      /*---Handlers for input change---*/

      handleUsernameChange(event) {
        this.setState({
          username: event.target.value
        })
      }

      handleEmailChange(event) {
        this.setState({
          email: event.target.value
        })
      }

      handlePasswordChange(event) {
        this.setState({
          password: event.target.value
        })
      }

      /*---Handler for SUBMIT button---*/
      
      handleSubmit(event) {

        var username = this.state.username
        var email = this.state.email
        var password = this.state.password

        alert('NAME: ' + username + ' | EMAIL: ' + email + ' | PASSWORD: ' + password);

        event.preventDefault();
        
      }
      
      /*---Handler for SUBMIT button---*/

      render() {
        return <div className={styles.signup}>
          
          <div className={classes('page_container', 'flex_container')}>
            
            <h3 className={styles.signup_header}>
              create an account
            </h3>
            
            <form onSubmit={this.handleSubmit}
              className={classes('signup_form', 'formField', 'flex-container')}>
              
              {/*---USERNAME Field---*/}

              <label className={classes('formLabel', 'flex_container')}>
                <div className={styles.form_icon}/>
                <input 
                  className='inputField'
                  name='username'
                  type='text'
                  placeholder='username'
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  />
              </label>
              
              {/*---EMAIL Field---*/}

              <label className={classes('topSpace', 'formField', 'flex_container')}>
                <div className={styles.form_icon}/>
                <input 
                  className='inputField'
                  name='email'
                  type='text'
                  placeholder='your email'
                  value={this.state.email}
                  onChange={this.handleEmailChange} 
                  />
              </label>
              
              {/*---PASSWORD Field---*/}

              <label className={classes('topSpace', 'formField', 'flex_container')}>
                <div className={styles.form_icon}/>
                <input 
                  className='inputField'
                  name='email'
                  type='password'
                  placeholder='password'
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  />
              </label>
              
              {/*---SUBMIT BUTTON---*/}

              <input
                type='submit'
                value='register'
                className={classes('submitButton', 'topSpace')}/>

            </form>

            {/*---Tooltip (Already have an account?)--*/}

            <div className={classes('topSpace', 'signup_tooltip')}>
              already have an account? 
              sign in <a href="#" className={styles.login_link}>here</a>
            </div>
            
          </div>
            
        </div>
      }
}