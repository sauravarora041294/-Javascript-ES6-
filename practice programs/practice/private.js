var Module = (function(){
	var name = 'rahul';
	var password = "1234";

	return {
		getName: function(){
			return name;
		}
	}
})(); //IIFE - Immediately invoked functional expression

console.log(Module.getName());