import React, { Component } from 'react'
import { login, resetPassword } from '../../utils/firehelp';
import {Link} from 'react-router-dom';

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMessage: null }

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleSubmit(e){
    e.preventDefault()
    login(this.email.value, this.password.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword(){
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render () {
    return (
      <div className='signuppage'>
        <div className="container top">
          <div className="row">  
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h1>Account Profile</h1>
            </div>
            <div className="col-md-4">
              <button id="transparent"><Link to="/"><span ><img className='logoMain' src="./images/logo.png" alt="logo"/></span></Link></button>  
            </div>
          </div>
        </div>
 <hr></hr>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1> Login </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={(password) => this.password = password} />
              </div>
              {
                this.state.loginMessage &&
                <div className="alert alert-danger" role="alert">
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Error:</span>
                  &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
                </div>
              }
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
     </div>
    )
  }
}