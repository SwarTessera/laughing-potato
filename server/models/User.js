var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');

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
    i1: { type: String, unique: true, default: ''},
    i2: { type: String, unique: true, default: ''},
    i3: { type: String, unique: true, default: ''},
    i4: { type: String, unique: true, default: ''}
  },

});

/**
 * Password hash middleware.
 */
// userSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) return next();
//   bcrypt.genSalt(10, function(err, salt) { //salt is a key for hashing value for encryption
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

/**
 * Helper method for validating user's password.
 */
// userSchema.methods.comparePassword = 
// 	function(candidatePassword, cb) {
//   		bcrypt.compare(candidatePassword, this.password, 
//   	function(err, isMatch) {
//     	if (err) return cb(err);
//     	cb(null, isMatch);
//   });
// };

// Compile Schema into a mongoose Model
module.exports = mongoose.model('User', userSchema);
