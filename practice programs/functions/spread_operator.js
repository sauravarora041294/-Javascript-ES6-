// using ES6 spead operator

// The spread operator allows you to specify an array that should be split and have its items passed in as separate arguments to a function.

let test = [2,3,56,74,34,40,89,97];
let test2 = [-2, -23,-43,-98, -1];

// using rest parameter to compare elements in an array
// The JavaScript engine splits the array into individual arguments and passes them in.
console.log(Math.max.apply(Math, test)); // 97
console.log(Math.max(...test)); // 97
console.log(Math.min(...test)); // 2
console.log(Math.max(...test2)); // -1

// comapring rest parameter with other separate element

console.log(Math.max(...test2,0)); //0 

