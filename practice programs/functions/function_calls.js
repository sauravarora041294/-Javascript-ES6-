//ES5



function Person(name){
	this.names = name;
	
}
var person = new Person('saurav');
var notAPerson = Person();

console.log(person); // Person {name: 'saurav'}
// console.log(notAPerson); // undefined -  this sets the name property on the global Object in non-strict mode.
console.log(Person.prototype);

// In ECMAScript 5 and earlier, functions serve the dual purpose of being callable with or without new. When used with new, the this value inside a function is a new object and that new object is returned.







// how to check if a function was called using New.

function Person2(name){
	if(this instanceof Person2){
		console.log('true');
		this.names = name;
	}
	else {
		throw new Error(' You must use new to call Person2 function');
	}
}

// var per = Person2('testing'); 
// console.log(per); // You must use new to call Person2 function

var per2 = new Person2('saurav');
console.log(per2); // Person2 { name: 'saurav' }
// The call to Person.call() passes the person variable as the first argument, which means this is set to person inside of the Person function. 
// To the function, there's no way to distinguish this from being called with new.
var per3 = Person2.call(per2,'saurav');
// console.log(per3); //undefined







// To solve this problem, ECMAScript 6 introduces the new.target metaproperty. A metaproperty is a property of a non-object that provides additional information related to its target (such as new). When a function's [[Construct]] method is called, new.target is filled with the target of the new operator. That target is typically the constructor of the newly created object instance that will become this inside the function body. If [[Call]] is executed, then new.target is undefined.

function Person3(name){
	if(typeof new.target !== 'undefined'){
		console.log('true');
		this.names = name;
	}
	else {
		throw new Error(' You must use new to call Person2 function');
	}
}


var per2 = new Person3('saurav');
 console.log(per2); // Person2 { name: 'saurav' }

var per3 = Person3.call(per2,'saurav');
// console.log(per3); // Exception -You must use new to call Person2 function



// By using new.target instead of this instanceof Person, the Person constructor is now correctly throwing an error when used without new.

function Person4(name) {
	if(new.target === Person ) { // new.target must be Person in order to work correctly
		this.name = name;
	}
	else {
		throw new Error ('Error');
	}
}

function anotherPerson(name){
	Person.call(this, name); // new.target is undefined inside of the Person constructor (it was called without new).
}

var person = new Person4('saurav'); // Person { name ='saurav' }
console.log(person);
var anotherperson = new anotherPerson('saurav'); // Error
// console.log(anotherperson); 