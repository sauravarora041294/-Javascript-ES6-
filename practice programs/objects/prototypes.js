// creating objects with constructor function syntax

function Human(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
	this.fullname = function(){
		return this.firstname +" "+ this.lastname;
	}
}
var person1 = new Human('saurav','arora');
var person2 = new Human('virat','kohli');

/*
Human:
	firstname: 'saurav'
	lastname: 'arora'
	fullname: function()
	__proto__ : Object
		contructor: function Human(firstname, lastname)
		__proto__ : Object

*/


console.log(Human.prototype === person1.__proto__) // true 
console.log(Human.prototype === person2.__proto__) // true
console.log(person1.__proto__ === person2.__proto__) // true 

// Prototype object of the constructor function is shared among all the objects created using constructor functions

// The problem with the constructor function syntax is that it creates two different copies of constructor function, each for person1 and person2 having individual copies of properties and method. storing separate copies results in wastage of memory.


// creating objects using prototypes
// when a function is created, the javascript engine adds a prototype property(Object) to the function. this prototype property has a constructor property by default. constructor property points back to the function on which the prototype object is a property. 


// Prototype Object

Human.prototype.name = 'raj';
console.log(Human.prototype.name); // raj
Human.prototype['age'] = 24;
console.log(Human.prototype['age']); // 24

console.log(Human.prototype);


/*
// Human.prototype
Object
	age: 24
	name: 'raj'
	constructor: function Human(firstname, lastname)
	__proto__: Object
*/


// create an empty constructor function 
function Person(){

}

Person.prototype.name = 'saurav';
Person.prototype.age = 26;
Person.prototype.sayName = function(){
	console.log(this.name);
}

var person1 = new Person();
var person2 = new Person();
console.log(person1.name); // saurav
console.log(person1);


/*
output..

Person
	__proto__ : Object
*/


// if the object is empty, then how come person1.name outputs saurav ?? 
// answer: when we try to access the property of an object, the javascript engine first tries to find the property on th eobject;if the property is present on the object then it outputs the value.But, if the property is not present on the object then it checks tries to find the property on the prototype object or dunder proto of the object. If the property is found the value is returned else JavaScript engine tries to find the property on the dunder proto of the dunder proto of the object. This chain continues till the dunder proto property is null. In this cases output will be undefined.

// Problems with prototypes

person2.name = 'new saurav';
console.log(person1.name); // saurav
console.log(person2.name); // new saurav
// reason:  javascript engine first tries to find the property on the object itself as in case of person1 the property is present on the object JavaScript engines outputs value of name property of person1.
// In case of person2, name property is not present on the object. Hence, it outputs person2’s proptotype property name.



// when the prototype object contains a property of reference type

function Test(){
}
Test.prototype.name = 'saurav';
Test.prototype.age = 25;
Test.prototype.sayName= function(){
	console.log(this.name);
}
Test.prototype.friends = ['vijay','raj'];

var test1 = new Test();
var test2 = new Test();
console.log(test1.friends); // ['vijay','raj']

test1.friends.push('kartik');

console.log(test1.friends); // ['vijay','raj', 'kartik']
console.log(test2.friends); // ['vijay','raj', 'kartik']

// modifying the test1 object also modifies the test2 object, since the friends array exist in the Test.prototype, not on test1; therefore changes made in the friends property by test1 are also reflected on test2 object( which points to the same array ).




// solution -  combine constructor/Prototype

/*
1. problem with contructor- Every object has its own instance of the function
2. problem with prototype- modifying the property of one object will reflect the other object also

*/

// solution: we can define all the object specific properties inside the constructor and all the shared properties inside the prototype

function Employee(name, age){
	 this.name = name;
	 this.age = age;
	 this.friends = ['vijay','raj'];
}

Employee.prototype.sayName = function(){
	console.log(this.name);
}
var test3 = new Employee('jay',25);
var test4 = new Employee('virat',24);

console.log(test3.sayName === test4.sayName); // true

console.log(test3.name); // jay
console.log(test3.friends); // ['vijay','raj']

test3.friends.push('sachin');
console.log(test3.friends); // ['vijay','raj','sachin']
console.log(test4.friends); // ['vijay','raj']


// observe, the test4 friends property is not changed by changing the test3 friends property



















