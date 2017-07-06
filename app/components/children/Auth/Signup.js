import React, { Component } from 'react'
import { auth } from '../../utils/firehelp'
import {Link} from 'react-router-dom';

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { registerError: null }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault()
    auth(this.email.value, this.password.value)
      .catch(e => this.setState(setErrorMsg(e)))
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
        <div className="col-sm-6 col-sm-offset-3">
          <h1>Sign Up</h1>
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
              this.state.registerError &&
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.registerError}
              </div>
            }
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}