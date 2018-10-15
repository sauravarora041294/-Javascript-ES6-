// But arrow functions behave differently than traditional JavaScript functions in a number of important ways:

// 1. No this, super, arguments, and new.target bindings - The value of this, super, arguments, and new.target inside of the function is by the closest containing nonarrow function. (super is covered in Chapter 4.)

// 2. Cannot be called with new - Arrow functions do not have a [[Construct]] method and therefore cannot be used as constructors. Arrow functions throw an error when used with new.

// 3. No prototype - since you can't use new on an arrow function, there's no need for a prototype. The prototype property of an arrow function doesn't exist.

// 4. Can't change this - The value of this inside of the function can't be changed. It remains the same throughout the entire lifecycle of the function.

// 5. No arguments object - Since arrow functions have no arguments binding, you must rely on named and rest parameters to access function arguments.

// 6. No duplicate named parameters - arrow functions cannot have duplicate named parameters in strict or nonstrict mode, as opposed to nonarrow functions that cannot have duplicate named parameters only in strict mode.

var test = (name) => name
// console.log(test('saurav')); // test


// blank function

var blank = () => {}

var test = () => {
	console.log('using arrow fuction as a traditional function - with curly braces');
}
test();

// returning object

var returnObject = () => ({ id: 1, name: 'saurav' });
// console.log(returnObject()); // { id: 1, name: 'saurav' }
// console.log( returnObject.name);




// Even though arrow functions don't have their own arguments object, it's possible for them to access the arguments object from a containing function. That arguments object is then available no matter where the arrow function is executed later on. 

function createArrowFunctionReturningFirstArgument(){
	return() => arguments[0]; 
}

var param = createArrowFunctionReturningFirstArgument(5);
console.log(param()); //5
// Even though the arrow function is no longer in the scope of the function that created it, arguments remains accessible due to scope chain resolution of the arguments identifier.