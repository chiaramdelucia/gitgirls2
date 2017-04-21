var axios = require('axios');

var scrapehelp = {

    getNCIscrape: function(){
        return axios.get('/scrape').then(function(data){
        	console.log('NCI Helper '+ data.data[0].title +" "+ data.data[0].link)
        	return data.data
        })
    }
};

module.exports = scrapehelp;