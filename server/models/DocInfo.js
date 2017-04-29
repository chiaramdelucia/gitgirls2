/* Mongoose Example (Students) (18.3.03)
 * ===================================== */

// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made

var DocInfoSchema = new Schema({
	fullname : {
		type: String
	},
	website : {
		type: String
	},
	phonenumber : {
		type: String
	},
	condition : {
		type: String
	},
	hospital: {
		type: String
	},
	reason: {
		type: String
	}
	
});

// Create the "User" model with our UserSchema schema
var DocInfo = mongoose.model("DocInfo", DocInfoSchema);


// Export the User model, so it can be used in server.js with a require
module.exports = DocInfo;
