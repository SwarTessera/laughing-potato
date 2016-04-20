var mongoose = require('mongoose');

//Icon Schema
var iconSchema = new mongoose.Schema({
  name: { type: String, unique: true, lowercase: true },
  picture: { type: String, default: '' },
  iconId: Number
});

// Compile Schema into a mongoose Model
module.exports = mongoose.model('Icon', iconSchema);