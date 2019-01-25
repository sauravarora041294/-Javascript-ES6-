const testObject = {
	name: 'saurav',
	noArrowFn: function(){
		return function(){
			console.log('no arrow function ->')
			console.log(this.name); // returns undefined since function() has no name variable. will not go for the outer scope.
			console.log(arguments); // {}
		}; // we can bind the function using .bind(this) to give the same result as below.
	},
	arrowFn: function(){
		return () => {
			console.log('using arrow function ->');
			console.log(this.name); // return saurav, since the arrow function has no 'this', instead it will go for the parent scope.
			console.log(arguments);
		};
	}
}
testObject.noArrowFn()(); 
/*
undefined
[Arguments] {}
*/ 
testObject.arrowFn()();
/*
saurav
Arguments {}
*/

testObject.noArrowFn("hello","world")();
/*
undefined
Arguments {}
*/
testObject.arrowFn("hello","world")();
/*
undefined
Arguments {'0':"hello", '1': "world"}
*/
// ----------------------------------------------------------------------------

