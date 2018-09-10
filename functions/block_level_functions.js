
//In ES6, instead of hoisting these declarations to the top of the block, they are hoisted all the way to the containing function or global environment.

console.log(typeof testing); // undefined - accessible 

if(true){

	console.log(typeof testing); // testing function accessible here
	// console.log(typeof anotherTest); // undefined 
	function testing(){
		console.log('testing block level function');
	}
// function expression using Let are not hoisted on the top of the containing block.
	let anotherTest = function(){
		console.log('testing let function expression');
	}

	testing(); // works
	anotherTest(); // works
}

testing(); // works


// In this example, doSomething() is hoisted into the global scope so that it still exists outside of the if block. ECMAScript 6 standardized this behavior to remove the incompatible browser behaviors that previously existed, so all ECMAScript 6 runtimes should behave in the same way.