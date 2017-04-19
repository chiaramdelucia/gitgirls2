// Inclue the React library
import React from 'react'

// Include the react-router module
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Reference the high-level components
// var Main = require("../components/Main");
// var *** = require("../components/*****************");
import Main from "../components/Main";
import Dashboard from '../components/children/Dashboard'


// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

	  <Route path="cancer1" disease='Cancer 1' component={Dasboard} />

      <IndexRoute component={Main} />

    </Route>

  </Router>

);
