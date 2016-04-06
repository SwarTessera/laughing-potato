var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var bcrypt = require('bcrypt-nodejs');

autoIncrement.initialize(mongoose.connection);

//User Schema
var userSchema = new mongoose.Schema({
  name: { type: String, unique: true, lowercase: true },
  question: String,
  answer: String,

  profile: {
    email: { type: String, unique: true, default: '' },
    gender: { type: String, default: '' },
    picture: { type: String, default: '' }
  },

  password: {
    i1: { type: String, default: ''},
    i2: { type: String, default: ''},
    i3: { type: String, default: ''},
    i4: { type: String, default: ''}
  },

  authenticate: {
    swar: String,
    tessera: String
  }

});

userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'uId',
    startAt: 1,
    //incrementBy: 100
});

// Compile Schema into a mongoose Model
module.exports = mongoose.model('User', userSchema);
