// Inclue the React library
import React from 'react';
import ReactDOM from 'react-dom';


// Include the react-router module
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Reference the high-level components
import Main from "../components/Main";
import Dashboard from '../components/children/Dashboard';
import Topic1 from '../components/children/grandchildren/Topic1';
import Topic2 from '../components/children/grandchildren/Topic2';
import Topic3 from '../components/children/grandchildren/Topic3';
import Topic4 from '../components/children/grandchildren/Topic4';


// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

		<Route path="cancer1" disease='Cancer 1' component={Dashboard}>

	  		<Route path='Topic1' topic='Topic 1' component={Topic1} />
	  		<Route path='Topic2' topic='Topic 2' component={Topic2} />
	  		<Route path='Topic3' topic='Topic 3' component={Topic3} />
	  		<Route path='Topic4' topic='Topic 4' component={Topic4} />

	  		<IndexRoute component={Topic1} />
		</Route>

		<Route path="cancer2" disease='Cancer 2' component={Dashboard}>

	  		<Route path='Topic1' topic='Topic 1' component={Topic1} />
	  		<Route path='Topic2' topic='Topic 2' component={Topic2} />
	  		<Route path='Topic3' topic='Topic 3' component={Topic3} />
	  		<Route path='Topic4' topic='Topic 4' component={Topic4} />

	  		<IndexRoute component={Topic1} />
		</Route>

		<Route path="cancer3" disease='Cancer 3' component={Dashboard}>

	  		<Route path='Topic1' topic='Topic 1' component={Topic1} />
	  		<Route path='Topic2' topic='Topic 2' component={Topic2} />
	  		<Route path='Topic3' topic='Topic 3' component={Topic3} />
	  		<Route path='Topic4' topic='Topic 4' component={Topic4} />

	  		<IndexRoute component={Topic1} />
		</Route>

		<Route path="cancer4" disease='Cancer 4' component={Dashboard}>

	  		<Route path='Topic1' topic='Topic 1' component={Topic1} />
	  		<Route path='Topic2' topic='Topic 2' component={Topic2} />
	  		<Route path='Topic3' topic='Topic 3' component={Topic3} />
	  		<Route path='Topic4' topic='Topic 4' component={Topic4} />

	  		<IndexRoute component={Topic1} />
		</Route>
	  		<IndexRoute component={Main} />

	</Route>

  </Router>

);
