const mongoose = require('mongoose');
const users = require('./models/user');

const url = 'mongodb://localhost:27017/user';

const connect = mongoose.connect(url);

connect.then((db) => {
	console.log('connected to db');
		users.create({
			name: 'saurav',
			address: 'lucknow',
			age: 24
		})
		.then((user) => {
			console.log(user);
			return users.findByIdAndUpdate(user._id, {
				$set: { address: 'Noida' }
			},{
				new: true
			})
			.exec();
		})
		.then((thisUser) => {
			console.log(thisUser);
			thisUser.projects.push({
				name: 'chat app',
				technology: 'node js'
			});
			return thisUser.save();
		})
		.then((savedUser) => {
			console.log(savedUser);
			return users.remove({})
		})
		.then(() => {
			return mongoose.connection.close();
		})
		.catch((err) => {
			console.log(err);
		})

})