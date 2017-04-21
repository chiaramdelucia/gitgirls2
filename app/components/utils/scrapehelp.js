var axios = require('axios');

var scrapehelp = {

    getNCIscrape: function(){
        return axios.get('/scrape')
    }
};

module.exports = scrapehelp;