import mongoose from 'mongoose';

var Schema = mongoose.Schema;


var ForumSchema = new Schema({

	postTitle: {
		type: String
	},
	category: {
		type: String
	},
	userName: {
		type: String
	},
	post: {
		type: String
	}
	
});


var Forum = mongoose.model("Forum", ForumSchema);


module.exports = Forum;
