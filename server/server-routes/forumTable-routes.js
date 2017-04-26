const axios = require('axios');

module.exports = function(app){

	app.get("/forumtable", function(req, res) {
	  // This GET request will search for the latest Forum
	  Forum.find({}).exec(function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	  });
	});

	app.post("/forumpost", function(req, res) {

		var postTitle = req.body.postTile;
		var category = req.body.categor;
		var userName = req.body.userName;
		var post = req.body.post;

		Forum.insert({ 
			fullname: fullname,
			category: category,
			userName: userName,
			post: req.body.post,

		})

	});





}