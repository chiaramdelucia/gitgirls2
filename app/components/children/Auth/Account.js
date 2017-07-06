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
                <div className="well account">
                  <img src="./images/profile_pic.png" alt="logo" />
                  <br/>
                  <h3>superwoman17</h3>
                  <ul>
                    <li><h5>Ovarian Cancer patient</h5></li>
                    <li><h5>Member since May 2017</h5></li>
                  </ul>
                </div>
               </div>
               <div className="col-md-8">
                <div className="well account bluewell">
                   <h3>About Me</h3>
                   <p>I am a comic book loving RN who can't stand how itchy her head is under these 'fashionable' head scarfs. Looking to talk to people who can relate to the trivial annoyances of the day-to-day life post-chemo.</p>
                </div>
                <div className="well account bluewell">

                   <h3>Favourites</h3>
                   <p>All bookmarked doctor recommendations and forum posts will be placed here</p>
                  </div>
                  </div>
             </div>
      	</div>
    	)
  	}
}