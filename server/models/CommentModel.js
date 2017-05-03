const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	comment: {
		type: String
	},
	username: {
		type: String
	}
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;