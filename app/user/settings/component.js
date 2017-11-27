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

    constructor(props) {
        super(props);
        this.state = {
          _id : localStorage.getItem("_id"),
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
          newPassword: (this.state || {}).newPassword,
          currentPassword: (this.state || {}).currentPassword,
          disableInput: true
        }
        //handle change of data
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handleCurrentPasswordChange = this.handleCurrentPasswordChange.bind(this);

        //button handler
        this._allowEdit = this._allowEdit.bind(this);

        //hand submission of form
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    //handle change of data
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleNewPasswordChange(event){
      this.setState({
        newPassword: event.target.value
      });
    }
    handleCurrentPasswordChange(event){
      this.setState({
        currentPassword: event.target.value
      })
    }

    //allow edit of inputs
    _allowEdit(event){
      event.stopPropagation();
      this.setState({
        disableInput: !this.state.disableInput
      });
    }
    // validate answer with api
    // get values of expected answer & score to display
    handleSubmit(event) {
        event.preventDefault();
        //validation if needed goes here

        //api call to validate allAnswer
        fetch(new Request('http://localhost:8080/api/user/settingsPost', {
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          method: 'POST',
          body: JSON.stringify({
            "_id": this.state._id,
            "email": this.state.email,
            "username": this.state.username,
            "newPassword": this.state.newPassword,
            "currentPassword": this.state.currentPassword
            })
        })).then((response) => {
          //get json full response after is done processing
          return response.json();
        }).then((data)=>{
          alert(data.message);
          this.setState({
            //SET THE STATES IF NEEDED
          })
        });
    }

    //render the submit or edit button
    renderButtons(){
      return((this.state.disableInput)?
          <input
            type='button'
            value='Edit Information'
            className={classes('submit_button', 'settings_button')}
            onClick = {this._allowEdit}
          />
        :
          <div>
            <input
              type='button'
              value='Submit Change'
              className={classes('submit_button', 'settings_button')}
              onClick = {this.handleSubmit}
            />

            <input
              type='reset'
              value='Cancel'
              className={classes('cancel_button', 'settings_button')}
              onClick = {this._allowEdit}
            />
          </div>
      );
    }


    //render complete component
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
                                <p className={styles.tooltip_text}>change the name we&#39;ll greet you with.</p>
                            </div>
                            <input
                                className='inputField'
                                name='username'
                                type='text'
                                value = {this.state.username}
                                placeholder='New Username'
                                onChange={this.handleUsernameChange}
                                disabled = {(this.state.disableInput)?"disabled": ""}
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
                                value= {this.state.email}
                                placeholder='New Email'
                                onChange={this.handleEmailChange}
                                disabled = {(this.state.disableInput)?"disabled": ""}
                            />
                        </label>

                        <label className={classes('formLabel', 'flex_container')}>
                            <div className={styles.field_tooltip}>
                                <p className={styles.tooltip_text}>change your password.</p>
                            </div>
                            <input
                                className='inputField'
                                name='newPassword'
                                type='password'
                                placeholder='New Password'
                                onChange={this.handleNewPasswordChange}
                                disabled = {(this.state.disableInput)?"disabled": ""}
                            />
                        </label>
                        <div style = {{display: (this.state.disableInput)?"none": "block"}}>
                          <label className={classes('formLabel', 'flex_container')} >
                              <div className={styles.field_tooltip}>
                                  <p className={styles.tooltip_text}>Current Password</p>
                              </div>
                              <input
                                  className='inputField'
                                  name='currentPassword'
                                  type='password'
                                  placeholder='Current Password'
                                  onChange={this.handleCurrentPassword}
                              />
                          </label>
                        </div>

                    {/*---FORM BUTTONS---*/}

                    <div className={classes('buttons_container','flex_container')}>
                        {this.renderButtons()}
                    </div>

                    </form>


                    </div>
                </div>
            </div>
        </div>
    }
}
