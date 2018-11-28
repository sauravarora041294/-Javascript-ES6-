for(var i=0; i<4; i++){
	setTimeout(function(i_local){
					return function(){
						console.log(i_local);
					}
				}(i),0);
}

/*
0
1
2
3
*/

const arr = [10,12,14,16,18];
for(var i=0;i<arr.length; i++){
	setTimeout(function(i_local){
		return function(){
			console.log('Index: '+i_local+' element ='+arr[i_local]);
		}
	}(i), 1000);
}
/*
10
12
14
16
18
*/


var foo = 'bim';
var getFoo = function(){
	return foo;
}
foo = 'boum';

console.log(getFoo());

// boum

for(let i = 0; i<4; i++){
	(function(i){
		setTimeout(() => console.log(i),2000);
	})(i);
}
// 0,1,2,3

let dog = {
	name: 'doggo',
	sayName(){
		console.log(this.name);
	}
}
let sayName = dog.sayName
sayName.bind(dog)();

// doggo

/*function Dog(name){
	this.name = name;
}
Dog.bark = function(){
	console.log(this.name + 'says woof');
}
let fido = new Dog('fido');
fido.bark();*/


const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

const newHeroes = heroes.map(h => {
  h.name = h.name.toUpperCase()
  return h;
})
console.log(newHeroes);