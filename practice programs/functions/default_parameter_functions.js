// default parameters functions in EC6

// The JavaScript arguments object is a local variable available within all functions. It contains all the function parameters that are passed to the function and can be indexed like an array. The length property of the arguments object returns the number of arguments passed to the function.

function check(name, age, city){
	console.log(arguments.length); // 3
}



function check_with_default(name, age=25, city ='lucknow') {
	console.log(arguments.length); // 1
}






function modify_params(name, age, city){

	//"use strict";

	console.log(name === arguments[0]) // true
	console.log(age === arguments[1])  // true
	console.log(city === arguments[2]) // true

	name = 'saurav arora';
	age = 23
	city = 'noida'

	console.log(name === arguments[0]) // true
	console.log(age === arguments[1])  // true
	console.log(city === arguments[2]) // true

}

function modify_params_strictmode(name, age, city){

	"use strict";

	console.log(name === arguments[0]) // true
	console.log(age === arguments[1])  // true
	console.log(city === arguments[2]) // true

	name = 'saurav arora';
	age = 23
	city = 'noida'
 
 // now, in ECMA5 strict mode, the arguments Object is not updated on changing the named parameters. In strict mode, the arguments object does not reflect changes to the named parameters.

	console.log(name === arguments[0]) // false
	console.log(age === arguments[1])  // false
	console.log(city === arguments[2]) // false

}

// The arguments object in a function using ECMAScript 6 default parameter values, however, will always behave in the same manner as ECMAScript 5 strict mode, regardless of whether the function is explicitly running in strict mode. 


// This behavior occurs in both nonstrict and strict mode, so you can rely on arguments to always reflect the initial call state.

function mixArgs(first, second = "b") {
    console.log(arguments.length);
    console.log(first === arguments[0]); // true
    console.log(second === arguments[1]); // false
    first = "c";
    second = "d"
    console.log(first === arguments[0]); // false
    console.log(second === arguments[1]); // false
}

 check('saurav',24,'lucknow');
 check_with_default('saurav');
 modify_params('saurav', 24, 'lucknow');
 modify_params_strictmode('saurav', 24, 'lucknow');
 mixArgs("a");