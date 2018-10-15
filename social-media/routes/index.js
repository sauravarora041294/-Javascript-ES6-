var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users = require('../model/user');
router.use(bodyParser.json());


router.route('/')

.get((req, res,next) => {
	Users.find({})
	.then((userDetails) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(userDetails)
	}, (err) => next(err) )
	.catch((err) => next(err));
})

.post((req,res,next) => {
	console.log('dish creating..')
	Users.create(req.body)
	.then((user) => {
		console.log('dish created');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(user);
	}, (err) => next(err))
	.catch((err) => next(err))	
})

.delete((req,res,next) => {
	Users.remove({})
	.then((resp) => {
		console.log('deleting users..')
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(resp);
	}, (err) => next(err))
	.catch((err) => next(err));
})

.put((req,res,next) => {
	res.statusCode = 403;
	res.end('PUT not supported..');
})



router.route('/:userId')

.get((req,res,next) => {
	Users.findById(req.params.userId)
	.then((userData) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(userData);
	}, (err) => next(err))
}, (err) => next(err))

.put((req,res,next) => {
	Users.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true })
	.then((updatedData) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(updatedData);
	}, (err) => next(err))
}, (err) => next(err))

.post((req, res, next) => {
	console.log('not supported..');
	res.statusCode = 404;
	res.end('Post operation not supported');
})

.delete((req, res, next) => {
	Users.findByIdAndRemove(req.params.userId)
	.then((updatedData) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(updatedData);
	}, (err) => next(err))
.catch((err) => next(err))
})




router.route('/:userId/posts')

.get((req,res,next) => {
	Users.findById(req.params.userId)
	.then((userData) => {
		if(userData != null) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(userData.posts);
	} else {
			res.statusCode = 404;
			console.log('Error -> data does not exist..');
			err = new Error('Data for userId '+ req.params.userId+' does not exists..');
			return next(err);
	}
	}, (err) => next(err))
.catch((err) => next(err))
})

.put((req,res,next) => {
	console.log('PUT not supported');
	res.statusCode = 404;
	res.end('PUT method not supported here..');
})

.post((req,res,next) => {
	Users.findById(req.params.userId)
	.then((userData) => {
		if(userData != null){
			userData.posts.push(req.body);
			userData.save()
			.then((data) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(userData);
			}, (err) => next(err))
		} else{
			res.statusCode = 404;
			err = new Error('cannot POST for the given id: '+ req.paams.userId);
			return next(err);
		}
	}, (err) => next(err))
	.catch((err) => next(err));
})

.delete((req,res,next) => {
	Users.findById(req.params.userId)
	.then((data) => {
		if(data != null){
			for(var i = (data.posts.length - 1) ;i>=0; i--){
				data.posts.id(data.posts[i]._id).remove();
			}
			data.save()
			.then((updatedData) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(updatedData);
			}, (err)=> next(err))
		} else {
			res.statusCode = 404;
			err = new Error('Id not found');
			return next(err);
		}
	}, (err) => next(err))
	.catch((err) => next(err));
});



router.route('/:userId/posts/:postId')
.get((req,res,next) => {
	Users.findById(req.params.userId)
	.then((data) => {
		if(data != null && data.posts.id(req.params.postId) != null) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(data.posts.id(req.params.postId));
		} else if( data == null ) {
			err = new Error('user with id: '+ req.params.userId + ' does not exist..');
			res.statusCode = 404;
			return next(err);
		} else {
			err = new Error('post with post id: '+ req.params.postId+ ' does not exists...');
			res.statusCode = 404;
			return next(err);
		}

	}, (err)=> next(err))
	.catch((err) => next(err))
})

.put((req, res, next) => {
	Users.findById(req.params.userId)
	.then((data) => {
		if(data != null && data.posts.id(req.params.postId) != null){
			if(req.body.description){
				data.posts.id(req.params.postId).description = req.body.description;
			}
			if(req.body.by){
				res.statusCode = 403;
				res.end('Cannot edit name');
			}
			data.save()
			.then((updatedData) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(updatedData);
			}, (err) => next(err)) 
		} else if(data == null) {
			err = new Error('user with userId: '+req.params.userId+' not found');
			res.statusCode = 404;
			return next(err);
		} else {
			err = new Error('Post does not exists for user-id '+req.params.postId);
			res.statusCode = 404;
			return next(err);
		}
	}, (err) => next(err))
	.catch((err) => next(err))
})

.post((req,res,next) => {
	res.statusCode = 404;
	res.end('Cannot perform POST on Id');
})

.delete((req, res,next) => {
	Users.findById(req.params.userId)
	.then((data) => {
		if(data!= null && data.posts.id(req.params.postId) != null){
			data.posts.id(req.params.postId).remove();
			data.save()
			.then((updatedData) => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(updatedData);
		}, (err) => next(err))
	} else if(data == null){
		res.statusCode = 404;
		err = new Error('No data found..');
		return next(err);
	} else{
		res.statusCode = 404;
		err = new Error('No such post found');
		return next(err);
	}
}, (err) =>next(err))
	.catch((err) => next(err));
})

module.exports = router;