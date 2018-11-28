
function greetings(name){
return new Promise((resolve) => {
	setTimeout(() => {
		resolve('Hello');
	}, 2000);
});
}

async function greetUserSeries(){
for(name of ['saurav','raj','karan']){
	var greet = await greetings(name);
	console.log(greet); 
	}
}
// greetUser();

// 6 seconds

async function greetUserParallel(name){
	var [a,b,c] = await Promise.race([greetings('saurav'),greetings('raj'), greetings('karan')]);
	console.log(`${a} ${b} ${c}`);
}
greetUserParallel();