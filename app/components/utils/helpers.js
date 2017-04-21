
// Helper Functions (in this case the only one is runQuery)
var helpers = {

  const doctor_api_key = '4e6764b7fa2910445e23428d12cdc643';
	// any functions that we want to add.  i.e changing the state

	doctorSearch: function() {
		searchVal = $("This is tbd once the frontend is starting to get worked on").val().trim();
		var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + doctor_api_key;

		return axios.get(resource_url).then(function(response) {

			console.log(response)

			return response.data.results[0].formatted
		});
	};

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;