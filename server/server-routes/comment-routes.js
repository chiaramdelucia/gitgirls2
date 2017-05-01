const axios = require('axios');
const Comment = require('../models/CommentModel.js');


module.exports = function(app){

	app.get("/forumtable/:id", function(req, res) {
	  // This GET request will search for the latest Forum
	  Comment.find()
	  	.then(function(doc){
	  		console.log("/forumtable/comment doc: " + doc)
	  		res.send(doc);

	  	})
	});

	app.post('/forumpost/:id', function(request, response){
		console.log(request.body.body);

		var comment = {};
		comment.body = request.body.body

		var newComment = new Comment(comment);

		newComment.save(function(error, comment){
			console.log('comment ' + comment)

			res.send(comment)
			})
			

		})
 
		response.redirect('/saved')
	})


}