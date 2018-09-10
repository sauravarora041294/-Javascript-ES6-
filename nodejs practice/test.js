const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/', (req,res) => {
	// console.log(res);
	 // res.set('Content-Type', 'text/plain');
	 // res.status(200);

	 res.sendFile(path.join(__dirname+'/index.html'))

	 // res.render('./index.html');
	
})

app.listen(3000, (err) => {
	if(err) {
		return console.log('error occured ', err);
	}
console.log('server running on port 3000');

})
/*
const server = http.createServer((request, response) => {
	console.log(request);

	response.end('hello');
});

server.listen(3000, (err) => {
	if(err){
		return console.log('erroe occured', err);
	}
	console.log('server runing at port 3000');
})*/