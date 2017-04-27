var axios = require('axios');

var formhelp = {

	showInfo: function() {
		return axios.get('/doctable').then(function(data) {
			console.log("this is doctable " + data)
		})
	},

	postInfo: function() {
		return axios.post('/doctable').then(function(data) {
			console.log("INSERTTABLE" + data)
		})
	}


};

module.exports = formhelp;