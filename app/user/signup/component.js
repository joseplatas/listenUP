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
      firstName: (this.state || {}).firstName,
      lastName: (this.state || {}).lastName,
      email: (this.state || {}).email,
      password: (this.state || {}).password,
      confirmPassword: (this.state || {}).confirmPassword
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*---Handlers for input change---*/

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
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

  handleConfirmPasswordChange(event) {
    this.setState({
      confirmPassword: event.target.value
    })
  }

  /*---Handler for SUBMIT button---*/

  handleSubmit(event) {

    var firstName = this.state.firstName
    var lastName = this.state.lastName
    var email = this.state.email
    var password = this.state.password
    var confirmPassword = this.state.confirmPassword

    fetch(new Request('http://localhost:8080/api/user/registerPost', {
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'//change to application/json
      }),
      method: 'POST',
      body: encodeURI(`email=${email}&fname=${firstName}&lname=${lastName}&password=${password}&confirmPassword=${confirmPassword}`)
    }))
    .then(() => alert('Successfully registered the user.'))

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

          {/*---FIRSTNAME Field---*/}

          <label className={classes('formLabel', 'flex_container')}>
            <div className={styles.form_icon} />
            <input
              className='inputField'
              name='firstName'
              type='text'
              placeholder='first name'
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </label>

          {/*---LASTNAME Field---*/}

          <label className={classes('topSpace','formLabel', 'flex_container')}>
            <div className={styles.form_icon} />
            <input
              className='inputField'
              name='lastName'
              type='text'
              placeholder='last name'
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
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