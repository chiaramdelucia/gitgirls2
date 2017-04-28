var axios = require('axios');

var formhelp = {

    showInfo: function() {
        return axios.get('/doctable').then(function(response) {
                console.log("this is docform;table " + response.data);
                return response.data
            })
            .catch(function(error) {
                console.log(error);
            });
},

		postInfo: function(data) {
    // console.log(data.title + '' + data.category + data.author + data.content)
    		return axios.post('/insertdoc', {
            fullname: data.fullname,
            website: data.website,
            phonenumber: data.phonenumber,
            category: data.category
        })
				.then((response) => {
                console.log("this is docform;table " + response.data);
                return response.data
            });
}



};

module.exports = formhelp;