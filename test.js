// closure

function employee(){
	var eid = 1001;
	var emp_name = 'saurav';
	this.getEid = function(){
		return eid;
	}
}

var e_obj = employee();
console.log(e_obj.getEid());




// module pattern
// anonymous closures

/*var global_var = 'this is the global variable';

(function(){
	var arr = [10,20,30,40,50,60,70];
	var average = function(){
		var total = arr.reduce(function(acc, item) {
			return acc+item;
		}, 0);
		return 'average = '+ total/arr.length;	
	};

	var failing = function(){
		var failingGrades = arr.filter(function(item){
			return item<40; 
		});
		return 'You failed '+failingGrades.length + ' times';
	}

	console.log(failing());
	console.log(average());
});*/
