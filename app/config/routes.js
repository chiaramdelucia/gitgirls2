// // Include the React library
// var React = require("react");

// // Include the react-router module
// var router = require("react-router");

// // Include the Route component for displaying individual routes
// var Route = router.Route;

// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// var Router = router.Router;

// // Include the hashHistory prop to handle routing client side without a server
// // https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// var hashHistory = router.hashHistory;

// // Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

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

      {/* If user selects Info or Chat show the appropriate component */}
	  <Route path="cancer1" disease='Cancer 1' component={Dasboard} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>

);
