import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './login.css'

import { Link } from 'react-router-dom'

function classes(...classNames) {
    return classNames
        .map(cn => styles[cn])
        .join(' ')
}

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: (this.state || {}).email,
            password: (this.state || {}).password
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {

        var email = this.state.email
        var password = this.state.password

        {/*---Alert is only used for testing, remove when functioning---*/}

        alert('NAME: ' + email + ' | PASSWORD: ' + password);

        event.preventDefault();

    }

    render() {
        return <div className={styles.login}>

            <div className={classes('page_container', 'flex_container')}>

                <h3 className={styles.login_header}>
                    login
                    </h3>

                <form onSubmit={this.handleSubmit}
                    className={classes('login_form', 'formField', 'flex-container')}>

                    {/*---USERNAME Field---*/}

                    <label className={classes('formLabel', 'flex_container')}>
                        <div className={styles.form_icon} />
                        <input
                            className='inputField'
                            name='email'
                            type='text'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </label>
                    {/*---PASSWORD Field---*/}

                    <label className={classes('topSpace', 'formField', 'flex_container')}>
                        <div className={styles.form_icon} />
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
                        value='login'
                        className={classes('submitButton', 'topSpace')} />

                </form>

                {/*---Tooltip (Don't have an account?)--*/}

                <div className={classes('topSpace', 'login_tooltip')}>
                    don't have an account? make one <Link to='/Signup' className={styles.login_link}>here</Link>
                </div>

            </div>
        </div>
    }
}