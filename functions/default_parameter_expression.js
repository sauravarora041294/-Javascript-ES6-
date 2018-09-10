function getValue(){
	return 5;
}

function addValues(num){
	return num*10;
}

function add(first, second=getValue()){
	console.log(first+second);
}

function adds(first, second=addValues(first)){
	console.log(first+second);
}

function add_tdz(first=second, second){
	console.log(first+second);
}

add(2,2); // 4
add(2); // 7
adds(2); // 22
add_tdz(undefined, 1)