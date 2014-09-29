var mongoose = require('mongoose');
var moment = require('moment');
// var bcrypt = require('bcrypt-nodejs');
// var crypto = require('crypto');

var trackedStuffSchema = new mongoose.Schema({
  // Food
  // I ate (inflammatory foods):
  soy: {type: Boolean, default:false},
  gluten: {type: Boolean, default:false},
  othergrains: {type: Boolean, default:false},
  legumes: {type: Boolean, default:false},
  corn: {type: Boolean, default:false},
  seedoil: {type: Boolean, default:false},
  alcohol: {type: Boolean, default:false},
  sugar: {type: Boolean, default:false},
  dairy: {type: Boolean, default:false},

  // I ate (anti-inflammatory foods):
  sulphorousveggies: {type: Boolean, default:false},
  leafygreens: {type: Boolean, default:false},
  colors: {type: Boolean, default:false},

  // Activities:
  hoursofsleep: Number,
  takeprobiotic: {type: Boolean, default:false},
  takefishoil: {type: Boolean, default:false},
  takeleutein: {type: Boolean, default:false},
  taketurmeric: {
    flag: {type: Boolean, default:false},
    num: {type: int, default:0}
  },
  usedurezol: {
    flag: {type: Booelan, default:false},
    num: {type: int, default:0}
  },

  wearglasses: {type: Boolean, default:false},
  warmcompress: {type: Boolean, default:false},
  walkdogs: {type: Boolean, default:false},
  exercise: {
    flag: {type: Boolean, default:false},
    intensity: {type: int, default:0},
    type: {type: String, default:""}
  },
  additionalcomments: String,
  forday: {type: String, default: moment().format("YYYY-MM-DD")},
  userid: {type: String, default:'unknown'},
  _id: {type: String}
  });

// /**
//  * Hash the password for security.
//  * "Pre" is a Mongoose middleware that executes before each user.save() call.
//  */

// trackedStuffSchema.pre('save', function(next) {
//   var user = this;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(5, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// /**
//  * Validate user's password.
//  * Used by Passport-Local Strategy for password validation.
//  */

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// /**
//  * Get URL to a user's gravatar.
//  * Used in Navbar and Account Management page.
//  */

// userSchema.methods.gravatar = function(size) {
//   if (!size) size = 200;

//   if (!this.email) {
//     return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
//   }

//   var md5 = crypto.createHash('md5').update(this.email).digest('hex');
//   return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
// };

module.exports = mongoose.model('TrackedStuff', trackedStuffSchema);