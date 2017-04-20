// Inclue the React library
import React from 'react';
import ReactDOM from 'react-dom';


// Include the react-router module
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Reference the high-level components
import Main from "../components/Main";
import Dashboard from '../components/children/Dashboard'
import Scrape from '../components/children/Scrape'
import DocInfo from "../components/DocInfo"

// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

	  <Route path="cancer1" disease='Cancer 1' component={Dashboard} />

      

    </Route>

  </Router>

);
