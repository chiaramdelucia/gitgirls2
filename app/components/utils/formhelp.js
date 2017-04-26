var axios = require('axios');

var formhelp = {

	showInfo: function() {
		return axios.get('/doctable').then(function(data) {
			console.log("this is doctable " + data)
		})
	},

	postInfo: function() {
		return axios.get('/insertdoc').then(function(data) {
			console.log("WTF! INSERTTABLE" + data)
		})
	}


};

module.exports = formhelp;