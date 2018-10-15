// Immediately invoked function Expresions


let test = function(name){
		let value = 20;
	return {

		getName: function(){
			return name;
		},
		getValue: function(){
			return value;
		}
	};

}('saurav');

console.log(test.getName());
console.log(test.getValue());

// Using Arrow functions

let test_arrow = ((name, value) => {
	return {
		getName: function(){
				return name;
	},
	getValue: function(){
		return value;
	}
}
})('saurav', 30); 

console.log(test_arrow.getName());
console.log(test_arrow.getValue());



var testObject = {
	id: '123',

	init : function(name){
		document.addEventListener('click', (function(event){
			this.doSomething(event.type);	// error - The call to this.doSomething() is broken because this is a reference to the object that was the target of the event (in this case document), instead of being bound to PageHandler
		}), false);
	},
	doSomething: function(type){

		console.log('Handling '+ type + 'for '+ this.id);
	}
};
// we could fix this by binding the value of this to PageHandler explicitly using the bind() method on the function instead, 



var testObject2 = {
	id: '123',

	init : function(name){
		document.addEventListener('click', (function(event){
			this.doSomething(event.type);	// works
		}).bind(this), false)
	},
	doSomething: function(type){

		console.log('Handling '+ type + 'for '+ this.id);
	}
	doSomething: function(type){

		console.log('Handling '+ type + 'for '+ this.id);
	}
};

// Now the code works as expected, but it may look a little bit strange. By calling bind(this), you're actually creating a new function whose this is bound to the current this, which is PageHandler. To avoid creating an extra function, a better way to fix this code is to use an arrow function.

// using arrow function:

var testObject3 = {
	id: '1234',

	init: function(type){
		document.addEventListener('click', event => {
			this.doSomething(event.type);
		}, false);
	}

	doSomething: function(type){
			console.log('ffev');
		}
}
// Arrow functions have no this binding, which means the value of this inside an arrow function can only be determined by looking up the scope chain. If the arrow function is contained within a nonarrow function, this will be the same as the containing function; otherwise, this is equivalent to the value of this in the global scope. Here's one way you could write this code using an arrow function:










