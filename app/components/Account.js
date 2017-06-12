import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Account extends Component {
	constructor(props) {
    	super(props);


  	}
  	render () {
  		console.log("Account PROPS",this.props);
    	return (
    		<div className="signuppage">
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
             <div className="container profile">
               <div className="col-md-4">
                <img src="./images/profile_pic.png" alt="logo" />
               </div>
               <div className="col-md-8">
                 <dl className="dl-horizontal">
                  <dt>Username</dt>
                  <dd>superwoman17</dd>
                  <dt>Condition</dt>
                  <dd>Ovarian</dd>
                  <dt>Relationship to Patient</dt>
                  <dd>Self</dd>
                  <dt>About Me</dt>
                  <dd>I am a comic book loving RN who can't stand how itchy her head is under these 'fashionable' head scarfs. Looking to talk to people who can relate to the trivial annoyances of the day-to-day life post-chemo.</dd>
                 </dl>
               </div>
             </div>
      	</div>
    	)
  	}
}