
// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(location) {

    console.log(location);

    // Figure out the geolocation
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;

// // Helper Functions (in this case the only one is runQuery)
// var helpers = {

//   runQuery: function(location) {

//     console.log(location);

//     // Figure out the geolocation
//     var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;

//     return axios.get(queryURL).then(function(response) {

//       console.log(response);
//       return response.data.results[0].formatted;
//     });

//   }

// };

// // We export the helpers function (which contains getGithubInfo)
// module.exports = helpers;

