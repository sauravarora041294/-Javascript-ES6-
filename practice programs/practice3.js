var arr = [20,30,40,50];
for(var i=0;i<4; i++){
	setTimeout(function(){
		console.log('index: '+i +' value: '+arr[i]);
	}, 2000);
}