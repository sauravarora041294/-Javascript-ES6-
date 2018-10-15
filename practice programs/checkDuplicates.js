//  Print duplicate characters of a string
class checkDuplicates {
	check(text){
		let map = new Map();
		for(var i=0;i<text.length; i++){
			if(map.has(text[i])){
				 map.set(text[i], map.get(text[i])+1);
			} else{
				map.set(text[i], 1);
			}
		}
		map.forEach(function(value, key, map){
			if(value>1){
				console.log(key);
			}
		})

	}
}

class countOccurence {
	count(text){
		let map = new Map()
			for(var i=0;i<text.length;i++){
				if(map.has(text[i])){
					map.set(text[i], map.get(text[i])+1);
				} else{
					map.set(text[i], 1);
				}
			}
			map.forEach((value, key,map)=>{
				console.log(key+":"+ value);
			});
			// console.log(map);
		}
	}

let ob1 = new checkDuplicates();
console.log('repeated characters:');
ob1.check('saurav arora');

let ob2 = new countOccurence();
console.log('counting characters:');
ob2.count('sauravarora'); 