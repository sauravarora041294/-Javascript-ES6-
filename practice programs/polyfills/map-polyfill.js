Array.prototype.map_polyfill = function(fn, thisp){
	if(this === null){
		throw new TypeError;
	}
	if(typeof fn !== 'function'){
		throw new TypeError;
	}
	var result=[];
	for(var i=0;i<this.length;i++){
		if(i in this) {
			var val = this[i];
			result.push(fn.call(thisp,val,i,this))
	}
}
return result;
}
var arr = [1,2,3,4,5].map_polyfill(function(i){
	return i*2;
})