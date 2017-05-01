const axios = require('axios');


var commentHelp = {

	// showComment: function() {
	// 	return axios.get('/forumtable/:id')
	// 		.then(function(response) {
	// 			console.log("this is show comment axios.get " + response.data);
	// 			return response.data
	// 		})
	// 		.catch(function (error) {
 //    			console.log(error);
 // 			 });
	// },

	postComment: function(data) {
		console.log(data)
		// console.log("data area" + data.area)
		return axios.post('/forumpost/:id', {
			comment: data.comment
		})
			.then((response) => {
				console.log("this is comment post" + response.data);
				return response.data
			});
	}


};

module.exports = commentHelp;