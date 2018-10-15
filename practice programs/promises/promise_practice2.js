/*function getSum(a,b){
	var isNegative = function(){
		return ((a<0) || (b<0));
	}

	var promise = new Promise(function(resolve, reject){
		if(isNegative()){
			reject(new Error('error - negative number..'));
		}
		resolve(a+b);
	});
	return promise;
}
*/

function getSum(a,b){
	var isNegative = function(){
		return ((a<0)||(b<0));
	}

	if(isNegative()){
		return Promise.reject(new Error('error occurred..'));
	}
	return Promise.resolve(a+b);
}

console.log('getting sum of numbers using promise chaining... \n');	
getSum(20,40)
.then((result) => {
	console.log(result);
	return getSum(40,50);
})
.then((result) => {
	console.log(result);
	return getSum(40,50);
})
.then((result)=> {
	console.log(result);
})
.catch((err) => {
	console.log(err);
})

/*---------------------------------*/


/* Using Promise.all for concurrent execution of promises */

let id_s = [1,2,3,4,5,6,7,8];

function add_val(val){
	if(val<0){
		return Promise.reject(new Error('number lesss than zero'));
	}
	return Promise.resolve(val+10);
}

console.log('using concurrent execution of promise using Promise.all \n');

Promise.all(id_s.map(add_val))
.then(my_val => {
	console.log(my_val[0]);
	console.log(my_val[1]);
	console.log(my_val[2]);
	console.log(my_val[3]);
})

/* using Array.reduce to run promises in series */

var total = 1000;
function reduceSum(item){
	total = total - item;
	return total;
}

let items = [10,20,30,40,50,60,70];

items.reduce((promise, item) => {
	return promise.then(console.log(reduceSum(item)))
}, Promise.resolve());
