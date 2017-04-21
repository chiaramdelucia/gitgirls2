var axios = require('axios');

var scrapehelp = {

    getNCIscrape: function(){
        axios.get('/scrape')
    }
}

module.exports = scrapehelp;