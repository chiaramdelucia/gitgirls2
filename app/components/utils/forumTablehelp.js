const axios = require('axios');


var forumTablehelp = {

	showInfo: function() {
		return axios.get('/forumtable')
			.then(function(response) {
				console.log("this is forum;table " + response.data);
				return response.data
			})
			.catch(function (error) {
    			console.log(error);
 			 });
	},

	postInfo: function(data) {
		// console.log(data.title + '' + data.category + data.author + data.content)
		return axios.post('/forumpost', {title:data.title, category:data.category, author:data.author, content:data.content})
			.then(function(response){
				console.log('forum table response: ' + response)
				
			})
			.catch(function (error) {
    			console.log(error);
 			 });
	}


};

module.exports = forumTablehelp;