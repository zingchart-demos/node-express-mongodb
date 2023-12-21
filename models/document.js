const mongoose = require('mongoose');

// Create a document schema
const GaussSchema = new mongoose.Schema({
  date: Date,
  series0: Number,
  series1: Number,
  series2: Number,
  series3: Number
});

// Associate the schema with the Document model
module.exports = mongoose.model('Document', GaussSchema);