// console.log(typeof(Array.prototype.filter_polyfill));
if(typeof(Array.prototype.filter_polyfill !== 'function')){
	
	Array.prototype.filter_polyfill = function(fn, thisp){
		if(this === null){
			throw new TypeError;
		}
		if(typeof fn !== 'function'){
			throw new TypeError;
		}
		var result = [];
		for(var i=0;i<this.length; i++){
			if(i in this){
				var val = this[i];
				if(fn.call(thisp, val, i, this)){
					result.push(val)
				}
			}
		}
		return result;
	}
}

 var arr = [2,3,4,5].filter_polyfill(function(i){ 
	return i>3;
});
console.log(arr);