const http = require('http');
const path = require('path');
const fs = require('fs');

var server = http.createServer((req,res) =>{
	// console.log(req.headers);
	console.log('request for '+req.url+ ' with method '+ req.method);
	var fileUrl;
	if(req.method == 'GET'){
		if(req.url == '/'){
			fileUrl = '/index.html';
		} else{
			fileUrl = req.url;
		}
		var filePath = path.resolve('./public'+ fileUrl);
		const fileExt = path.extname(filePath);

		if(fileExt == '.html'){
			fs.exists(filePath,(exists)=>{
				if(!exists){
					res.statusCode = 404;
					res.setHeader('Content-Type','text/html');
					res.end('<html><body><h1>404 '+fileUrl +' Not found</h1></body></html>');
					return;
				} else{
					res.statusCode = 200;
					res.setHeader('Content-Type','application/json');
					fs.createReadStream(filePath).pipe(res);
				}
			});
		} else {
				res.statusCode = 404;
				res.setHeader('Content-Type','text/html');
				res.end('<html><body><h1>404 '+fileUrl +' Not a html file</h1></body></html>');
		}
	} else{
			res.statusCode = 404;
			res.setHeader('Content-Type','text/html');
			res.end('<html><body><h1>404 '+req.method +' Not suported</h1></body></html>');
	}

});
server.listen(3000, 'localhost',()=> {
	console.log('server listening at port 3000');
});