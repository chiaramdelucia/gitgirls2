const axios = require('axios');


var forumTablehelp = {

	showInfo: function() {
		return axios.get('/forumtable')
			.then(function(response) {
				return response.data
			})
			.catch(function (error) {
    			console.log(error);
 			 });
	},

	postInfo: function(data) {
		console.log('data postInfo: ',data)
		return axios.post('/forumpost', {
			title:data.title, 
			category:data.category, 
			author:data.author, 
			content:data.content, 
			location:data.location, 
			condition: data.condition
		})
			.then((response) => {
				return response.data
			});
	}


};

module.exports = forumTablehelp;