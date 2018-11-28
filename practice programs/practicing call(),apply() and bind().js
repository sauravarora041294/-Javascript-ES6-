var student = {
	firstname: 'saurav',
	lastname:'arora',
	age: 23,
	school: 'JIIT',
	getStudentName: function(){
		var fullname = this.firstname+ ' '+ this.lastname;
		return fullname;
	}
};

var student_alumni = {
	firstname: 'John',
	lastname:'Parker',
	age: 29,
	school: 'CMS',
	getStudentName: function(){
		var fullname = this.firstname+ ' '+ this.lastname;
		return fullname;
	}
};


showStudentDetail = function(hobby){
	console.log(this.getStudentName()+ ' age= '+this.age + ' hobby = '+hobby);
}

var details_student = showStudentDetail.bind(student);
var details_alumni = showStudentDetail.bind(student_alumni);
details_student('Table Tennis');
details_alumni('Painting');
showStudentDetail.call(student,'cooking');
showStudentDetail.apply(student_alumni, ['dancing']);
