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

	/*create and save docinfo*/
	app.post('/doctable', function(request, response){
		console.log(request.body)

		var details = {};
		
		details.fullname = req.body.fullname;
		details.website = req.body.website;
		details.phonenumber = req.body.phonenumber;
		details.category = req.body.category;
	
		var entry = new DocInfo(details);

		NewsPost.find({phonenumber: request.body.phonenumber}, function(err, docs){
			if (docs.length){
				console.log('already exists')
			}
			else{
				entry.save(function(err, doc){
					if (err) {
						console.log(err)
					}
					else {
					console.log('saved!')
					}
				})
			}
		});
	});

}