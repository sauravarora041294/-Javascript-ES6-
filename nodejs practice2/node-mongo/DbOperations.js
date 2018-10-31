const assert = require('assert');

exports.insertDocument = (db, document, collection, callback)=>{
	const colOb = db.collection(collection);
	console.log('inserting document..');
	return colOb.insert(document)
};

exports.findDocuments = (db, collection, callback) => {
	const colOb = db.collection(collection);
	console.log('Finding documents..');
	return colOb.find({}).toArray();
};

exports.removeDocuments = (db, document, collection, callback) => {
	const colOb = db.collection(collection);
	console.log('deleting document...');
	return colOb.deleteOne(document)
	
};

exports.updateDocument = (db, document, update, collection, callback ) => {
	const colOb = db.collection(collection);
	console.log('updating document..');
	return colOb.updateOne(document, { $set: update }, null);
};

