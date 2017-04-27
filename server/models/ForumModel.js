import mongoose from 'mongoose';

var Schema = mongoose.Schema;


var forumSchema = new Schema({

	title: {
		type:String,
		required: true
	}
	category: {
		type: String,
		required: true,
	}
	author: String,
	content: {
		type: String,
		required:true
	}
	
});


var Forum = mongoose.model("Forum", forumSchema);


module.exports = Forum;
