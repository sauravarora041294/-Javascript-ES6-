const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/scripts'));

app.get('/', (req,res) => {
	 // res.set('Content-Type', 'text/plain');
	 // res.status(200);

	 res.sendFile('/index.html');

	 // res.render('./index.html');
	
})

app.get('/page1', (req,res)=> {
	res.sendFile('page1.html');
});

app.get('/page2', (req,res)=> {
	res.sendFile('page2.html');
});

app.get('/download/:file(*)', (req,res)=> {
	var file = req.params.file;
	var file_location = path.join(__dirname+'/uploads', file);
	res.download(file_location, file);
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