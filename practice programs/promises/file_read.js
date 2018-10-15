var fs = require('fs');

function fileReadPromise(filename){
	return new Promise((resolve, reject) =>{
		fs.fileRead(filename, 'utf8', (err, data)=> {
			if(err) reject(err)
			else resolve(data)		
		})
	})
}

fileReadPromise('index.html')
	.then(data => console.log(data))
	.catch(e => console.log(e))