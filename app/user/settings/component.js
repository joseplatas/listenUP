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

export class Settings extends React.Component {
    render() {
        return <div className={classes('page_container', 'flex_container')}>

            <div className={classes('center_container')}>

                <div className={classes('settings_content')}>

                <h1 className={styles.settings_header}>
                    settings
                </h1>

                <div className={classes('settings_container')}>

                    <h2 className={styles.settings_subheader}>
                        account information
                    </h2>

                    <form>

                        <label className={classes('formLabel', 'flex_container')}>
                            <div className={styles.field_tooltip}>
                                <p className={styles.tooltip_text}>change the name we'll greet you with.</p>
                            </div>
                            <input
                                className='inputField'
                                name='username'
                                type='text'
                                placeholder='new username'
                            />
                        </label>

                        <label className={classes('formLabel', 'flex_container')}>
                            <div className={styles.field_tooltip}>
                                <p className={styles.tooltip_text}>change your email.</p>
                            </div>
                            <input
                                className='inputField'
                                name='new email'
                                type='text'
                                placeholder='new email'
                            />
                        </label>

                        <label className={classes('formLabel', 'flex_container')}>
                            <div className={styles.field_tooltip}>
                                <p className={styles.tooltip_text}>confirm your new email.</p>
                            </div>
                            <input
                                className='inputField'
                                name='confirmEmail'
                                type='text'
                                placeholder='confirm email'
                            />
                        </label>

                        <label className={classes('formLabel', 'flex_container')}>
                            <div className={styles.field_tooltip}>
                                <p className={styles.tooltip_text}>change your password.</p>
                            </div>
                            <input
                                className='inputField'
                                name='password'
                                type='password'
                                placeholder='password'
                            />
                        </label>

                        <label className={classes('formLabel', 'flex_container')}>
                            <div className={styles.field_tooltip}>
                                <p className={styles.tooltip_text}>confirm your new password.</p>
                            </div>
                            <input
                                className='inputField'
                                name='confirmPassword'
                                type='password'
                                placeholder='password'
                            />
                        </label>

                        <a href="/" className={classes('delete_account_link')}>
                        delete account
                         </a>
                         
                    {/*---FORM BUTTONS---*/}

                    <div className={classes('buttons_container','flex_container')}>
                        <input
                        type='submit'
                        value='submit'
                        className={classes('submit_button', 'settings_button')} />

                        <input
                        type='button'
                        value='cancel'
                        className={classes('cancel_button', 'settings_button')} />
                    </div>

                    </form>


                    </div>
                </div>
            </div>
        </div>
    }
}