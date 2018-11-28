// using Hash Table to insert and retrieve Student's Roll number and Names

// linear probing/ open hashing

const student = [
{
	roll: 101,
	name: 'radhika'
}, 
{
	roll: 102,
	name:'saurav'
},
{
	roll: 103,
	name: 'raj'
},
{
	roll: 104,
	name: 'das'
},
{
	roll: 105,
	name: 'megha'
}];
let len = student.length;
let hashTable = new Array(len);

for(let i=0;i< len; i++){
	insert(student[i]['roll'], student[i]['name']);
}
console.log(find(104));

function hashFunction(roll_number){	
	return roll_number%len;
}

function insert(roll, name){
	let index = hashFunction(roll);
	while(hashTable[index] != null){
		index = (index+1)%len;
	}
	hashTable[index] = name;
}

function find(roll_number){
	let index = hashFunction(roll_number);
	return hashTable[index];
}


	



