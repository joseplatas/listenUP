var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username:{
    type: String,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  points: {
    type: Number,
  },
  password: {
    type: String,
    required: true
  },
  coursesTaken:{
    type: Array
  },
  learningTime: {
    type: Number
  },
  languageActive:{
    type: String,
    trim: true
  },
  percentAvg:{
    type: Number
  },
  languageActive: {
    type: String,
    // get: function(data) {
    //   try {
    //     return JSON.parse(data);
    //   } catch() {
    //     return data;
    //   }
    // },
    // set: function(data) {
    //   return JSON.stringify(data);
    // }
  }
  //NOTE: look up set and get in mongoose
});
//authenticate input against database document
UserSchema.statics.authenticate = function(email,password, callback){
  User.findOne({email: email})
      .exec(function(error,user){
        if(error){
          return callback(error);
        }else if(!user){
          return callback(error);
        }

        bcrypt.compare(password, user.password, function(error, result){
          if(result == true){
            return callback(null, user);
          }else{
            return callback();
          }
        });

      });
}


//has password before saving to database
UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err,hash){
    if(err){
      return next(err);
    }
    user.password = hash;
    next();
  });
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
