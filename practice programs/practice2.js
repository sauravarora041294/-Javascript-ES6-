const hero = {
	name: 'Daredevil',
	location: {
		city: 'New york',
		district: 'kitchen hell'
	}
}
const newHero = JSON.parse(JSON.stringify(hero));
newHero.name = 'Jessica';
console.log(hero.name === 'Daredevil');
console.log(newHero);