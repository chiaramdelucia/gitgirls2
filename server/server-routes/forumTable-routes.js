const axios = require('axios');
var Forum = ('../server/models/ForumModel.js')


module.exports = function(app){

	app.get("/forumtable", function(req, res) {
	  // This GET request will search for the latest Forum
	  Forum.find({}, function(err, docs) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(docs);
	    }
	  });
	});

	// app.post("/forumpost", function(req, res) {

	// 	var postTitle = req.body.postTile;
	// 	var category = req.body.categor;
	// 	var userName = req.body.userName;
	// 	var post = req.body.post;

	// 	Forum.insert({ 
	// 		fullname: fullname,
	// 		category: category,
	// 		userName: userName,
	// 		post: req.body.post,

	// 	})

	// });





}