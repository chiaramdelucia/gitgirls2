const axios = require('axios');


var commentHelp = {


	postComment: function({ data, id }) {
		return axios.post(`/forumpost/${id}`, {
			comment: data.comment,
			username: data.username
		}).then((response) => {
			return response.data
		})
	}


};

module.exports = commentHelp;