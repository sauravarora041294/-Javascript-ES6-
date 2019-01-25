function showDate(){
	var day = new Date();
	const days = ['Mon','tue','Wed','Thu','fri','sat','sun'];
	console.log(days[day.getDay()-1]);
}
showDate();

