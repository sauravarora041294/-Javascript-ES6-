function getSum(n1, n2){
	varIsNegative = function(){
		return ((n1<0) || (n2<0));
	}

	var promise = new Promise( function(resolve, reject){
		if(varIsNegative()){
			reject('Negative number error');
		}
		resolve(n1+n2);
	});
	return promise; 
}

getSum(10,20)
	.then(function(result){
		console.log(result);
		return getSum(30, 40);
	},
	function(error){
		console.log(error);
	})
	  .then(function(result){
	  	console.log(result);
	  	return getSum(40,50);
	  },
	  function(error){
	  	console.log(error);
	  })
	  	.then(function(result){
	  		console.log(result);
	  	},
	  	function(error){
	  		console.log(error);
	  	});
	  	console.log('end of script');