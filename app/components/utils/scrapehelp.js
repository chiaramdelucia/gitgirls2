import axios from 'axios';
import cheerio from 'cheerio';


export const scrapehelp {
    
    NCIscrape: function(app) {

        app.get('/scrape', function(req, res) {

            return axios.get('https://www.cancer.gov/news-events/cancer-currents-blog')
            .then(res => console.log(res.data))
            .catch(e => console.error(e))

            // request('https://www.cancer.gov/news-events/cancer-currents-blog', function(error, response, html) {
            //     // console.log(html)
            //     var $ = cheerio.load(html);

            //     var result = [];


            //     $('ul > li.list-item').each(function(i, element) {
            //         var link = $(element).find('a').attr('href');
            //         var title = $(element).find('a').text();
            //         // var teaser = $(element).find('p').text();
            //         console.log(link);
            //         console.log(title);
            //         // console.log(teaser);

            //         result.push({
            //             title: title,
            //             link: link,
            //             // teaser: teaser
            //         });

            //     })
            //     console.log(result);
            // })
        })
    };
}
// import axios from 'axios';
// import cheerio from 'cheerio';



// const ACS_URL ='https://www.cancer.org/latest-news.html';



const handleAcsRes = (res)=>{console.log(res); return res.data};
// const handleAcsErr = (e)=>console.error(e)

// export const scrapeACS = ()=>
// 	axios.get(ACS_URL)
// 	.then(handleAcsRes)
// 	.catch(handleAcsErr)

// 	// scrapeACS();

// module.exports = function(app) {

//     app.get('/', function(req, res) {

//    const acsCallBack =(error, response, html) =>{
//             // console.log(html)
//             var $ = cheerio.load(html);

//             var result = [];


//             $('div.news-item').each(function(i, element) {
//                 var link = $(element).find('a').attr('href');
//                 var title = $(element).find('h4').text();
//                 var teaser = $(element).find('p').text();
//                 console.log(link);
//                 console.log(title);
//                 console.log(teaser);

//                 result.push({
//                     title: title,
//                     link: link,
//                     teaser: teaser
//                 });

//             })
//             // console.log(result)e;
//             res.render('index', {acs_data: result});
//         }

//         request('https://www.cancer.org/latest-news.html', acsCallBack)
//     })
// };