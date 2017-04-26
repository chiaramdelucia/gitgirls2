const axios = require('axios');


var forumTablehelp = {

	showInfo: function() {
		return axios.get('/forumtable').then(function(data) {
			console.log("this is forum;table " + data)
		})
	},

	postInfo: function() {
		return axios.get('/forumpost').then(function(data) {
			console.log("WTF! INSERT TABLE" + data)
		})
	}


};

module.exports = forumTablehelp;