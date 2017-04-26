/*Require Models*/
var DocInfo = require('../models/DocInfo.js')




module.exports = function(app){

	app.get("/doctable", function(req, res) {
	  // This GET request will search for the latest DocInfo
	  DocInfo.find({}).exec(function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	  });
	});

	app.post("/doctable", function(req, res) {

		var fullname = req.body.fullname;
		var website = req.body.website;
		var phonenumber = req.body.phonenumber;

		DocInfo.insert({ 
			fullname: fullname,
			website: website,
			phonenumber: phonenumber,
			category: req.body.category,

		})

	});

}