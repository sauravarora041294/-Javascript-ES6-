// Check if two Strings are anagrams of each other

class checkAnagram{
	
	check(text1, text2){

		var map1 = this.mapElements(text1);
		console.log(map1);
		var map2 = this.mapElements(text2);
		console.log(map2);
		if(map1.size != map2.size){
			console.log('Not an anagram...');
			return false;
		} else{
		map1.forEach((value, key,map1)=>{
			var test = map2.get(key);
			if(test!==value || (test === undefined && !map2.has(key)) ){
				console.log('Not an anagram');
				return false;
			}
		});
		console.log('anagram');
		return true;	
	}
}

	mapElements(text){
		var map = new Map();
		for(var i=0;i<text.length; i++){
			if(map.has(text[i])){
				map.set(text[i], map.get(text[i])+1);
			} else{
				map.set(text[i], 1);
			}
		}
		return map; 
	}
}

let ob1 = new checkAnagram();
ob1.check('saurav','vaurass');
