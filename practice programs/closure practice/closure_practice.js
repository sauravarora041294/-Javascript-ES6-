/*var module = (function(){
	var _emp_id = 153;
	var emp_age = 24;
	var emp_name = "karan";
	function _getEID(){
		return emp_id;
	}

	return{
		e_name: function(){
			return emp_name;
		},
		e_age: function(){
			return emp_age;
		}
	}
})();

function outer(){
	var name = "saurav";
	return function(){
		console.log(name);
	};
}
outer()();

console.log(module.e_name());

*/
var a = 'outer a';
var b = 'outer b';
console.log(this);
var myObj = {
	a : 'inner a',
	b : 'inner b' ,
	calculate: function(){
		setTimeout(function() {
			console.log('a ='+ (this.a)+ ', b ='+(this.b));
		}, 2000)
	}
};
myObj.calculate();

