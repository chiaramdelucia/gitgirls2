const axios = require('axios');
var Forum = require('../models/ForumModel.js');


module.exports = function(app){

	app.get("/forumtable", function(req, res) {
	  // This GET request will search for the latest Forum
	  Forum.find()
	  	.then(function(doc){
	  		console.log(doc)
	  		res.send(doc);

	  	})
	});


	app.post("/forumpost", function(req, res) {

		var post = {
			title: req.body.title,
		 	category: req.body.category,
			author: req.body.author,
		 	content: req.body.content
		}

		var forum = new Forum(post)

		forum.save(function(err, forum){
			res.send(forum)
		});


	});

}