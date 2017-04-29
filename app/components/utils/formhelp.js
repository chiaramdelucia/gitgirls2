var axios = require('axios');

var formhelp = {

    showInfo: function() {
        return axios.get('/doctable').then(function(response) {
                // console.log("this is docform;table " + response.data);
                return response.data
            })
            .catch(function(error) {
                console.log(error);
            });
},

		postInfo: function(data) {
    		return axios.post('/insertdoc', {
                fullname: data.fullname,
                website: data.website,
                phonenumber: data.phonenumber,
                condition: data.condition,
                hospital: data.hospital,
                reason: data.reason

            })
				.then((response) => {
                // console.log("this is docform;table " + response.data);
                return response.data
            });
}



};

module.exports = formhelp;