const axios = require('axios');
var Forum = require('../models/ForumModel.js');


module.exports = function(app){

	app.get("/forumtable", function(req, res) {
	  // This GET request will search for the latest Forum
	  Forum.find({})
	  	.populate('comment')
	  	.then(function(doc){
	  		// console.log("/forumtable doc: " + doc)
	  			
	  		res.send(doc);
	  	})
	});

	app.post("/forumpost", function(req, res) {
		console.log("/forumpost req: " + req.body.category)

		var post = {
			title: req.body.title,
		 	category: req.body.category,
			author: req.body.author,
		 	content: req.body.content,
		 	location: req.body.location,
		 	condition: req.body.condition
		}

		var forum = new Forum(post)

		forum.save(function(err, forum){
			res.send(forum)
			console.log("forum: " + forum)
		});


	});

}