var emp_arr = [
{
	name: 'saurav',
	salary: 20,
	title: 'software developer'
},
{
	name: 'suman',
	salary: 30,
	title: 'Jr. software developer'
},
{
	name: 'raja',
	salary: 50,
	title: 'CEO'
},
];

function increment(emp_arr, multiplier, jobQueue){
	for(var i=0;i<emp_arr.length; i++){
		var emp = emp_arr[i];
		jobQueue.push(function(){
			if(emp.title === 'CEO'){
				emp.salary = emp.salary + 30;
			} else {
				emp.salary = emp.salary +20;
			}
			console.log(emp);
		}());
	}
console.log(jobQueue);
}
increment(emp_arr, 2, []);