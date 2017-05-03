const axios = require('axios');


var commentHelp = {


	postComment: function({ data, id }) {
		console.log('commentHelp data: ', data.comment, data.username);

		console.log('commentHelp id: ', id);

		return axios.post(`/forumpost/${id}`, {
			comment: data.comment,
			username: data.username
		}).then((response) => {
			console.log("this is commentHelp: " + response.data);
			return response.data
		})
	}


};

module.exports = commentHelp;