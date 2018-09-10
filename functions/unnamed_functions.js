function test(object){
	let result  = Object.create(null);
	let len = arguments.length;
	// arguments object includes all parameters including the 1st parameter
	for(let i=1; i< len; i++){
		// result[arguments[i]] = 
		result[arguments[i]] = object[arguments[i]];
	}
	return result;
}

let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2015
};


//using rest parameters
// here we do not use arguments object, we use rest parameters, which iterates all the  required parameters only. 
function test_rest(object, ...rest_params){
	let result = Object.create(null);
	console.log(rest_params.length)

	for(let i=0;i<rest_params.length;i++){
		result[rest_params[i]] = object[rest_params[i]];
	}
	return result;
}

let ob = test( book, 'title', 'author', 'year' );
let ob_rest = test_rest( book, 'title', 'author', 'year' );
// console.log(ob);
console.log(ob_rest);