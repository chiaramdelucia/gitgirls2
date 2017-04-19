import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
	constructor() {
		super();
		// this.state would need to be whatever we need to put it at

	};

	const api_key = '4e6764b7fa2910445e23428d12cdc643';
	// any functions that we want to add.  i.e changing the state

	function doctorSearch() {
		searchVal = $("This is tbd once the frontend is starting to get worked on").val().trim();
		var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;
		baseAjax = $.ajax({
			url: resource_url,
			method: 'GET',
			dataType: 'jsonp'
		}).done(function(response) )



	}

};

ReactDOM.render(
  <App />, document.getElementById("app"));