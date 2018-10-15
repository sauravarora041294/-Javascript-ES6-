// understanding the 'var' scope  #hoisting 

function checkVarScope(flag) {
	
	if( flag ) {
	
		var color = 'Red';
	 	
	 	return (color + '-' + flag);
		
	 	} else {
		
		return (color + '-' + flag);  // color is undefined here for flag = false
		
	}

	// color is undefined here
}
console.log( checkVarScope(true) );   // Red-true  

console.log( checkVarScope(false) );  // undefined-false
