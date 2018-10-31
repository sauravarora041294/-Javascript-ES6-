const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var app =express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/view'));
app.use(express.static(__dirname+'/script'));


app.get('/', (req,res) => {
	console.log('index file');
});

app.get('/user',(req,res)=>{
	console.log('inside user get');
	console.log(req.body);

});

app.post('/user',(req,res)=>{
	
	var data_ob = req.body;
	console.log(JSON.stringify(data_ob));
	// res.status(200).send('user.html');
	res.redirect('/success.html');
	

})



app.listen(3000, ()=> {
	console.log('server started.. running at port 3000');
});

