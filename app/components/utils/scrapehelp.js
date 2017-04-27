var axios = require('axios');

var scrapehelp = {

    getNCIscrape: function(){
        return axios.get('/nci').then(function(data){
        	// console.log('NCI Helper '+ data.data[0].title +" "+ data.data[0].link)
        	return data.data
        })
    },

    getWHOscrape: function(){
        return axios.get('/who').then(function(data){
        	// console.log('WHO Helper '+ data.data[0].title +" "+ data.data[0].link)
        	return data.data
        })
    },

    getCRUKscrape: function(){
        return axios.get('/cruk').then(function(data){
        	// console.log('CRUK Helper '+ data.data[0].title +" "+ data.data[0].link)
        	return data.data
        })
    }
};

module.exports = scrapehelp;