const axios = require('axios');
const Comment = require('../models/CommentModel.js');
const Forum = require('../models/ForumModel.js');	


module.exports = function(app){
	
	app.post('/forumpost/:id', function(req, res){
		console.log('commentRoutes req.body: ', req.body)
		console.log('commentRoutes req.params: ', req.params);

		var newComment = {
			comment: req.body.comment,
			username: req.body.username
		}

		var comment = new Comment(newComment);

		comment.save(function(err, doc){

			if (err) throw err;
			console.log('commentRoutes Save comment ' + doc);

			Forum.update({'_id': req.params.id},{$push: {'comment': doc._id }})
				.exec(function(err, doc){
					if (err) throw err;
					res.send(comment);

				})


			})

	});


}