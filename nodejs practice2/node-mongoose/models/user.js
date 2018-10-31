const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	technology: {
		type: String,
		required: true
	}
},	{ timestamps: true }
)

const user = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	projects: [ projectSchema ]
},{
			timestamps: true
	}
);

var userDetails = mongoose.model('userDetail', user);

module.exports = userDetails;