const axios = require('axios');
const cheerio = require('cheerio');

module.exports = function(app){

	app.get('/nci', function(req, res) {

        axios.get('https://www.cancer.gov/news-events/cancer-currents-blog')
        .then(function(response, html){
            var $ = cheerio.load(response.data);
            // console.log(response.data)
            var result = [];


            $('div.has-images > ul > li.list-item').each(function(i, element) {
                var link = $(element).find('a.title').attr('href');
                var title = $(element).find('a.title').text();
                //console.log(link)
                //console.log(title)

                result.push({
                    title: title,
                    link: 'https://www.cancer.gov' + link,
                });
            })
            // console.log(result);
            res.send(result);
            
        })
        .catch(function(error){
            console.log(error)
        })
    })

    app.get('/who', function(req, res) {

        axios.get('http://www.who.int/cancer/publications/en/')
        .then(function(response, html){
            var $ = cheerio.load(response.data);
            // console.log(response.data)
            var result = [];


        $('ul.auto_archive > li').each(function(i, element) {
                var link = $(element).find('a').attr('href');
                var title = $(element).find('a').text();
                // console.log(link);
                // console.log(title);

                result.push({
                    title: title,
                    link: 'http://www.who.int' + link,
                });

            })
            // console.log(result);
            res.send(result);
            
        })
        .catch(function(error){
            console.log(error)
        })
    })

    app.get('/cruk', function(req, res) {

        axios.get('http://www.cancerresearchuk.org/about-us/cancer-news')
        .then(function(response, html){
            var $ = cheerio.load(response.data);
            // console.log(response.data)
            var result = [];


            $('div.topic-content > h2').each(function(i, element) {
                var link = $(element).find('a').attr('href');
                var title = $(element).find('a').text();
                // console.log(link);
                // console.log(title);

                result.push({
                    title: title,
                    link: 'http://www.cancerresearchuk.org' + link,
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