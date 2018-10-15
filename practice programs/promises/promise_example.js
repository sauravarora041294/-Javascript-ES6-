function calculateAverage(num1,  num2, num3){
	sum = num1+num2+num3;
	av = sum/3;

	negativeMark = function(){
		return num1<0 || num2<0 || num3<0;
	}

	var promise = new Promise(function(resolve,reject){
		if(negativeMark()){
			reject('Negative mark');
		}
		resolve(av);
	});
	return promise;
}

calculateAverage(10,20,25).then( 
	function(result){
	console.log(result);
	return calculateAverage(30,35,50);
		},  function(err){
			console.log(err);
				  }).then(function(result){
						console.log(result);
						return calculateAverage(50,56,67);	
					 }, function(err){
							console.log(err)
							}).then(function(result){
								console.log(result)
								return calculateAverage(40,40,70);
							}, function(err){
								console.log(err);
							});
console.log('calculating average');
