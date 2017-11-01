import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from './signup.css'

import { Link } from 'react-router-dom'

function classes(...classNames) {
  return classNames
    .map(cn => styles[cn])
    .join(' ')
}

export class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: (this.state || {}).username,
      email: (this.state || {}).email,
      password: (this.state || {}).password,
      confirmPassword: (this.state || {}).confirmPassword
    }
    //WE NEED TO ADD THE CODE TO VALIDATE DATA
    this.handleUsernameChange = this._generateHandler("username");
    this.handleEmailChange = this._generateHandler("email");
    this.handlePasswordChange = this._generateHandler('password')
    this.handleConfirmPasswordChange = this._generateHandler('confirmPassword')
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*---Handlers for input change---*/

  _generateHandler(propertyName) {
    return function(event) {
      this.setState({
        [propertyName]: event.target.value
      })
    }.bind(this)
  }

  /*---Handler for SUBMIT button---*/

  handleSubmit(event) {
    event.preventDefault();
    var username = this.state.username;
    var email = this.state.email;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;

    if(username == undefined || email == undefined || password == undefined || confirmPassword == undefined){
      alert("Please enter all inputs");
      return false;
    }

    fetch(new Request('http://localhost:8080/api/user/registerPost', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        "username": username,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
        })
    })).then((response) => {
      //get json full response after is done processing
      return response.json();
    }).then((data)=>{
      //return value from above
      console.log(data);
      alert(data.message);
    });



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


          {/*---EMAIL Field---*/}

          <label className={classes('topSpace', 'formField', 'flex_container')}>
            <div className={styles.form_icon} />
            <input
              className='inputField'
              name='username'
              type='text'
              placeholder='your username'
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>

          {/*---EMAIL Field---*/}

          <label className={classes('topSpace', 'formField', 'flex_container')}>
            <div className={styles.form_icon} />
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
            <div className={styles.form_icon} />
            <input
              className='inputField'
              name='password'
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>

          {/*---CONFIRM PASSWORD Field---*/}

          <label className={classes('topSpace', 'formField', 'flex_container')}>
            <div className={styles.form_icon} />
            <input
              className='inputField'
              name='confirmPassword'
              type='password'
              placeholder='confirm password'
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordChange}
            />
          </label>

          {/*---SUBMIT BUTTON---*/}

          <input
            type='submit'
            value='register'
            className={classes('submitButton', 'topSpace')} />

        </form>

        {/*---Tooltip (Already have an account?)--*/}

        <div className={classes('topSpace', 'signup_tooltip')}>
          already have an account?
              sign in <Link to='/Login' className={styles.login_link}>here</Link>
        </div>

      </div>

    </div>
  }
}
