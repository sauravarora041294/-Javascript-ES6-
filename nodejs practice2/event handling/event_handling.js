const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', ()=> {
	console.log('my event triggered...');
});

// this defined
myEmitter.on('event2', function(a,b){
	console.log('waiting for response..')
	setTimeout(() => {
		console.log('inside setTimeout...'+a,b, this);
	}, 10000);
});


// this undefined here (arrow functions)
myEmitter.on('event3', (a,b) =>{
	console.log(a,b,this);
});

// making listener functions to asynchronous mode using setimmedite() or process.nextTick()

myEmitter.on('event4', (a,b) =>{
	setImmediate(() => {
		setTimeout(() => {
			console.log('this happerns asynchronously...');
		}, 3000);
		
	});
});

myEmitter.on('event5', (a,b) =>{
	setImmediate(() => {
		console.log('this too happens asynchronously...');
	});
});



myEmitter.once('newListener', (event, listener) => {
	if( event === 'myNewEvent' ){
		myEmitter.on('myNewEvent', () =>{
			console.log('inside newListener - mynewEvent emitted');
		})
	}
});
myEmitter.on('myNewEvent', () =>{
	console.log('my new Event emitted');
})
// myEmitter.emit('myEvent');
// myEmitter.emit('event2', 'a', 'b');
// myEmitter.emit('event3', 'a', 'b');
// myEmitter.emit('event4', 'a', 'b');
// myEmitter.emit('event5', 'a', 'b');	
myEmitter.emit('myNewEvent');