module.exports = (marks, name, callback) => {
	console.log('student name :'+ name);
	sum = 0;
	flag = 0;
	for(i=0;i<marks.length;i++){
		console.log('mark'+(i+1) +' :'+ marks[i]);
		sum = sum + marks[i];
		if(marks[i]<0){
			flag=1;
		}
		if(marks[i]>100){
			flag=2;
		}
	}
	if(flag ==1){
		callback(new Error('Marks cannot be less than zero'), null);
	} else if(flag == 2){
		callback(new Error('Marks cannot be greater than 100'), null);
	} else{
		callback(null, { total:() => (sum),
						 percentage:() => (sum/marks.length) })
	}
}