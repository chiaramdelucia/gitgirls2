const axios = require('axios');
const cheerio = require('cheerio');

module.exports = function(app){

	app.get('/scrape', function(req, res) {

        axios.get('https://www.cancer.gov/news-events/cancer-currents-blog')
        .then(function(response, html){
            var $ = cheerio.load(response.data);
            // console.log(response.data)
            var result = [];


            $('div.has-images > ul > li.list-item').each(function(i, element) {
                var link = $(element).find('a.title').attr('href');
                var title = $(element).find('a.title').text();
                // var teaser = $(element).find('p').text();
                // console.log(link);
                // console.log(title);
                // console.log(teaser);

                result.push({
                    title: title,
                    link: link,
                    // teaser: teaser
                });
            })
            // console.log(result);
            res.send(result);
            
        })
        .catch(function(error){
            console.log(error)
        })
    })

}