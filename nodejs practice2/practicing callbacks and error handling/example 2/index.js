// calculate percentage of student marks
var student = require('./student');
calculate = (name, ...marks) => {

	console.log(marks)

	student(marks, name,(err, stud)=>{
		if(err){
			console.log('ERROR : '+err.message);
		} else{
			console.log('sum = '+ stud.total());
			console.log('percentage = '+ stud.percentage()+'%');
		}
	});

}

calculate('dev', 23,65,76,56,89,56,54,67,88);