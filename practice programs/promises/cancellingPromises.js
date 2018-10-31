var {Observable} = require('rxjs');


const secondsPromise = new Observable((observer) => {
	let count = 0;
	setInterval(() => {
		observer.next(count++);	
	}, 1000);
})
secondsPromise.subscribe((res)=> {
	console.log(res);
})	

/*
.subcribe does not return an Observable, so that it can be chained, like .then(in Promises)...instead, it returns a Subscription for a given Observable. This subscription has only one method (unsubscribe).
however, Observable can still be chained using operators.
*/
// Quest.  how to chain subscription

