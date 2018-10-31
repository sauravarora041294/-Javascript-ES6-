const express = require('express');
const bodyParser = require('body-parser');
const defaultRoutes = express.Router();
defaultRoutes.use(bodyParser.json());

defaultRoutes.route('/')
.all((req,res,next)=>{
	statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('default get');
})
.put((req,res,next)=>{
	statusCode = 403;
	res.end('PUT not supported');
})
.post((req,res,next)=>{
	res.end('adding name = '+ req.body.name);
})
.delete((req,res,next)=>{
	res.end('delete default..'+ req.body.name);
});

defaultRoutes.route('/:id')
.all((req,res,next)=>{
	statusCode = 200;
	res.setHeader('Content-type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('GET with dishId = '+ req.params.id);
})

module.exports = defaultRoutes;
