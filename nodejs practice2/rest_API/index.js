const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
const dishRouter = require('./routes/dishRoutes');
const defaultRouter = require('./routes/defaultRoutes');
const dishId = require('./routes/dishIdRoutes');

app.use('/', defaultRouter);
app.use('/dish', dishRouter);



app.listen('3000', (err)=>{
	if(err){
		return console.log('error occured'+ err);
	}
	console.log('server running at port 3000');
})