const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	console.log('inside get');
	res.end('hello');
})
.put((req,res,next)=>{
	res.end('inside /dishes PUT');
})
.post((req,res,next)=>{
	res.end('inside /dishes POST');
})
.delete((req,res,next)=>{
	res.end('inside /dishes DELETE');
})

module.exports = dishRouter;