function convertToArray(args){
	// var s = number.toString();
	// console.log(typeof(s));
	// var rest = [...`${number}`];
	// console.log(rest);
	// console.log(`${number}`);
	 // console.log(args);   // 243 // [ 243 ]
	 // console.log([...`${args[0]}`])
	// console.log(...`${args}`) // 2 4 3
	// var n = [...`${args}`].map(num => parseInt(num)).sort().reduce((i,acc) => {
	// 	return i = i+acc;
	// },'');
	// console.log(parseInt(n));



}
convertToArray(243);

function checkString(input){
	if(Object.prototype.toString.call(input) === '[object String]'){
		return true;
	} else{
		return false;
	}
}


//console.log(checkString('saurav'));
//console.log(checkString([2,4,5]));

function splitStringToArray(input){
	console.log(input.trim().split(" "));
}
// splitStringToArray(" hello every one   ");

function test(){
	var ob1={name:'ob1'};
	var ob2=ob1;
	ob1.name="ob1 changed";
	ob1.age=23;
	console.log(ob1,ob2);
}
// test();
var arr = [1,2,3,4];
function compare_sort(x,y){
	if(x>y){
		return -1;
	} else{
		return 1
	}
	return 0;
}

function sort_arr(){
	
	console.log(arr.sort(compare_sort));
}
sort_arr();