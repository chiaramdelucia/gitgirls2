/*Require Models*/
var DocInfo = require('../models/DocInfo.js')


module.exports = function(app) {

app.get("/doctable", function(req, res) {
    // This GET request will search for the latest DocInfo
    DocInfo.find({}).exec(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

/*create and save docinfo*/
app.post('/insertdoc', function(req, res) {
    console.log(req.body)

    var details = {
    	fullname: req.body.fullname,
    	website: req.body.website,
    	phonenumber: req.body.phonenumber,
    	category: req.body.category,
    }

    var entry = new DocInfo(details);

    entry.save(function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            console.log('saved!')
          	res.send(doc);
        }
    })
});

}