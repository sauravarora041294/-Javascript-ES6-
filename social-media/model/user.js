const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PostSchema = new Schema({
	by: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
},
	{
		timestamps: true
	}
)

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	age: {
		type: Number,
		required: true
	},
	friendCount: {
		type: Number,
		required: true
	},
	profession: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	posts: [ PostSchema ]
});

var users = mongoose.model('user', UserSchema);
module.exports = users;