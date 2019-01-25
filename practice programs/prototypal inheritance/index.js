function bird(){
	this.name = 'raju';
}

	bird.prototype.getName = function(){
		return this.name;
	}

	bird.prototype.setName = function(name){
		this.name= name;
	}
var birdOb = new bird();
console.log(birdOb.getName());
birdOb.setName('rani');
console.log(birdOb.getName());
