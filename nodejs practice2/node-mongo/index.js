const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const DbOperations = require('./DbOperations');
const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'newTestDB';
MongoClient.connect(url, (err, clientOb) => {
	assert.equal(err, null);
	console.log('connection to db succesful');
	const dbOb = clientOb.db(dbname);
	const collectionOb = dbOb.collection('collection1');

	DbOperations.insertDocument(dbOb, {'name':'saurav', 'age': '24'}, 'collection1')
	.then((result) => {
		console.log(result);
		return DbOperations.findDocuments(dbOb, 'collection1')
	})
	.then((docs) => {
		console.log(docs);
		return DbOperations.updateDocument( dbOb, { 'name': 'saurav' }, { 'age': '30' }, 'collection1')
	})
	.then((result) => {
		console.log(result.result.n + ' document updated...');
		return DbOperations.findDocuments(dbOb, 'collection1')
	})
	.then((docs) => {
		console.log(docs);
		return DbOperations.removeDocuments(dbOb, { 'name':'saurav', 'age':'24' }, 'collection1')
	})
	.then((result) => {
		console.log(result.deletedCount + ' document deleted');
		return DbOperations.findDocuments(dbOb, 'collection1');
	})
	.then((docs) => {
		console.log(docs);
		return dbOb.dropCollection('collection1');
	})
	.then((result) => {
		console.log(result);
		return clientOb.close();
	})
	.catch((err) => console.log(err));
})