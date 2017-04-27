
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ForumSchema = new Schema({

	title: {
		type:String,
		required: true
	},
	category: {
		type: String,
		required: true,
	},
	author: String,
	content: {
		type: String,
		required:true
	}
	
});


var Forum = mongoose.model("Forum", ForumSchema);


module.exports = Forum;
