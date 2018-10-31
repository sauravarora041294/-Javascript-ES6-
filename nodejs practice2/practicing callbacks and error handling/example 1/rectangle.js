module.exports = (l,b,callback) => {

if(l<=0 || b<=0){
	setTimeout(() =>
		callback(new Error('dimensions cannot be less than zero'), null),
		2000);
	
} else{
	setTimeout(()=> callback(null,
									 {
										perimeter:() => (2*(l+b)),
										area:() => l*b
									}), 2000);
	
}
}
