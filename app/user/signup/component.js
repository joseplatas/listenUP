import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './styles.css'

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'your name',
          email: 'your email',
          password: 'fillerpassword'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        
        this.setState({value: event.target.value})
        
      }
      
      handleSubmit(event) {
        alert('NAME: ' + this.state.name + ' | EMAIL: ' + this.state.email 
             + ' | PASSWORD: ' + this.state.password);
        event.preventDefault();
      }
      
      render() {
        return <div className="signup">
          
          <div className='page_container flex_container'>
            
            <h3 className='signup_header'>
              create an account
            </h3>
            
            <form onSubmit={this.handleSubmit}
              className='signup_form formField flex-container'>
              
              <label className='formLabel flex_container'>
                <div className='form_icon'/>
                <input 
                  className='placeholder'
                  name='name'
                  type='text'
                  value={this.state.name}
                  onChange={this.handleChange} />
              </label>
              
              
              <label className='topSpace formField flex_container'>
                <div className='form_icon'/>
                <input 
                  className='placeholder'
                  name='email'
                  type='text'
                  value={this.state.email}
                  onChange={this.handleChange}/>
              </label>
              
              <label className='topSpace formField flex_container'>
                <div className='form_icon'/>
                <input 
                  className='placeholder'
                  name='email'
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}/>
              </label>
              
              <input
                type='submit'
                value='register'
                className='submitButton topSpace'/>
              
            </form>
            
            <div className="topSpace signup_tooltip">
              already have an account? 
              sign in <a href="#" 
              className="login_link">here</a>
            </div>
            
          </div>
            
        </div>
      }
}