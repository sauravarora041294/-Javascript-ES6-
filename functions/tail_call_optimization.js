// Perhaps the most interesting change to functions in ECMAScript 6 is an engine optimization, which changes the tail call system. A tail call is when a function is called as the last statement in another function, like:

"use strict"

function myFunction(){
	return anotherFunction(); // tail call
}

// Tail calls as implemented in ECMAScript 5 engines are handled just like any other function call: a new stack frame is created and pushed onto the call stack to represent the function call. That means every previous stack frame is kept in memory, which is problematic when the call stack gets too large.


// ECMAScript 6 seeks to reduce the size of the call stack for certain tail calls in strict mode (nonstrict mode tail calls are left untouched). With this optimization, instead of creating a new stack frame for a tail call, the current stack frame is cleared and reused so long as the following conditions are met:

// 1. The tail call does not require access to variables in the current stack frame (meaning the function is not a closure)
// 2. The function making the tail call has no further work to do after the tail call returns
// 3. The result of the tail call is returned as the function value

// "use strict"
function myFunction() {
	return anotherFunction(); // Optimized
}

// "use strict"
function myFunction(){
	anotherFunction(); // not optimized - no return
}

// Similarly, if you have a function that performs an operation after returning from the tail call, then the function can't be optimized:


// "use strict"
function myFunction(){
	return 1+ anotherFunction(); // not optimized -  must add after returning
}
// This example adds the result of doSomethingElse() with 1 before returning the value, and that's enough to turn off optimization.



// Another common way to inadvertently turn off optimization is to store the result of a function call in a variable and then return the result, such as
"use strict"
function test(){
	var result = testing();
	return result; // not optimized because the value of testing() is not immediately returned 
}

// Perhaps the hardest situation to avoid is in using closures. Because a closure has access to variables in the containing scope, tail call optimization may be turned off. For example:

"use strict"

function test(){
	var num =1;
	myfunc = () => num

	return myfunc(); // not optimized - function is a closure
}
// The closure func() has access to the local variable num in this example. Even though the call to func() immediately returns the result, optimization can't occur due to referencing the variable num.

