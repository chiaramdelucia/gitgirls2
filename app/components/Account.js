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
    			 <div className='row'>
          			<div className="col-md-4">
                		<button id="transparent"><Link to="/"><span ><img className='logoMain' src="./images/logo.png" alt="logo"/></span></Link></button>  
          			</div>
        		</div>	
				    <div>
	        		<h1>Account Profile</h1>
	           </div>
             <div className="container profile">
               <div className="col-md-4">
                <img src="./images/profile_pic.png" alt="logo" />
               </div>
               <div className="col-md-8">
                 <h3 className="profilehead">Username:</h3> <p className="profilep">superwoman17 </p>
                 <br />
                 <h3 className="profilehead">Condition: </h3><p className="profilep"> Ovarian</p>
                 <br />
                 <h3 className="profilehead">Relationship to Patient: </h3><p className="profilep">Self</p>
                 <br /> 
                 <h3 className="profilehead">About Me: </h3><p className="profilep">I am a comic book loving RN who can't stand how itchy her head is under these 'fashionable' head scarfs. Looking to talk to people who can relate to the trivial annoyances of the day to day life post-chemo.</p>
               </div>
             </div>

      	</div>
    	)
  	}
}