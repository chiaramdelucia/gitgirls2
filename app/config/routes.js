// Inclue the React library
import React from 'react';


// Include the react-router module
import {Route, Router, IndexRoute, browserHistory,hashHistory} from 'react-router';
import * as RR from 'react-router';
// console.log(RR);
// Reference the high-level components
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Dashboard from '../components/children/Dashboard';
import Topic from '../components/children/grandchildren/Topic';
import Scrape from '../components/children/Scrape';
import DoctorForm from '../components/children/DoctorForm';

// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Wrapper}>
    	<Route path="/main" component={Main}/>
		<Route path=":condition" component={Dashboard}>
	  		<Route path='/:condition/:location' component={Topic} />	
		</Route>
		<IndexRoute component={Main} />
	</Route>
  </Router>


);
