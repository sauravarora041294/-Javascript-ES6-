// normal function
function sum3(x,y,z){
	return x+y+z;
}

console.log(sum3(1,2,3));


// curry function

function sum(x){
	return function(y){
		return function(z){
			return x+y+z;
		}
	}
}

console.log(sum(1)(2)(3));


// curry wrapper

function curry(fn) {
	return function(x){
		return function(y){
			return function(z){
				return fn(x,y,z);
			}
		}
	}
}

const sum03 = curry((function(x,y,z){
	return x+y+z;
}));

console.log(sum03(1)(2)(3));