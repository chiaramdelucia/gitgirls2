const axios = require('axios');


var forumTablehelp = {

	showInfo: function() {
		return axios.get('/forumtable')
			.then(function(response) {
				console.log("this is forum;table " + response.data)
			})
			.catch(function (error) {
    			console.log(error);
 			 });
	},

	postInfo: function() {
		return axios.get('/forumpost').then(function(data) {
			console.log("WTF! INSERT TABLE" + data)
		})
	}


};

module.exports = forumTablehelp;