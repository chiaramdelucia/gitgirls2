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
      		</div>
    	)
  	}
}