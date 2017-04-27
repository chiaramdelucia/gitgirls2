const axios = require('axios');
var Forum = ('../server/models/ForumModel.js')


module.exports = function(app){

	app.get("/forumtable", function(req, res) {
	  // This GET request will search for the latest Forum
	  Forum.find()
	  	.then(function(doc){
	  		res.render('index', {items:doc});
	  	})
	});

	app.post("/forumpost", function(req, res) {

		var post = {
			title: req.body.tile,
		 	category: req.body.category,
			author: req.body.author,
		 	content: req.body.content
		}

		var forum = new Forum(post)

		forum.save();


	});

}