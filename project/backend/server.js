const express = require('express');

var app = express();
app.use(express.static(__dirname+'/frontend/social-media-project/dist/social-media-project'));
app.get('/', function(req, res){
	console.log(__dirname);
	res.send(index.html);
});
app.listen(3000,()=>{
	console.log('serving at port 3000');
})
