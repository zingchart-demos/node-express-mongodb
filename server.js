const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const app = express();
const Document = require('./models/document');

let aData = null;

// Connect to the `test` Mongo database using Mongoose
mongoose.connect('mongodb://localhost/test');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async (callback) => {
	// Get the data from test_data.json
	let aDocs = JSON.parse(fs.readFileSync('./test_data.json'));

	// Loop through and add the sample dataset to the database
	for (let n = 0; n < aDocs.length; n++){
		const doc = await Document.findOne({_id:aDocs[n]._id});
		
		if (!doc) {
			let docToAdd = new Document(aDocs[n]);
			await docToAdd.save();
		};
	};
});

// Start the server
let server = app.listen(3000, () => {
	let port = server.address().port;
	console.log('Example app listening at http://localhost:%s', port);
});

// Configure our app to serve static files from the current directory
app.use(express.static('./'));

// Display `index.html` when `localhost:3000` is requested
app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: './'});
});

// Send all records when there's a GET request to `localhost:3000/test`
app.get('/test', async (req, res) => {
	const records = await Document.find();
	aData = records;
	res.send(aData);
});
