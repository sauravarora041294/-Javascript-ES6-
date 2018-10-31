var rect = require('./rectangle');
solveRect=(l,b) => {
	console.log('length = '+ l + ' breadth = '+ b);
	rect(l,b,(err,rectangle) => {
		if(err){
			console.log('ERROR: '+ err.message);
		} else{
			console.log('area ='+ rectangle.area());
			console.log('perimeter ='+ rectangle.perimeter());
		}
	});
}
solveRect(2,5);
solveRect(2,-5);