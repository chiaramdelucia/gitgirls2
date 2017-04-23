// Inclue the React library
import React from 'react';


// Include the react-router module
import {Route, Router, IndexRoute, browserHistory,hashHistory} from 'react-router';
import * as RR from 'react-router';
console.log(RR);
// Reference the high-level components
import Main from "../components/Main";
import Dashboard from '../components/children/Dashboard';
import Topic from '../components/children/grandchildren/Topic';
import Scrape from '../components/children/Scrape';
import DoctorForm from '../components/children/DoctorForm';

// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
		<Route path=":disease" component={Dashboard}>
	  		<Route path=':topic' component={Topic} />
	  		<IndexRoute component={Topic} />
		</Route>
	</Route>
  </Router>


);
