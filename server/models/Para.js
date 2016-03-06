var mongoose = require('mongoose');

//Random paragraph generator Schema
var paraSchema = new mongoose.Schema({
  lineId: Number,
  line: String,
});

// Compile Schema into a mongoose Model
module.exports = mongoose.model('Para', paraSchema);
