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
  },
  active: {
    type: Number,
    default: 1
  },
  dateCreated:{
    type: Date,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    default: Date.now
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

//add to coursesTaken property of document for an specific username
UserSchema.statics.addCourseToUser = function(username, course, callback){
  //check if course_id and userAnswer was pass
  if(username && course){
    User.findOneAndUpdate({username: username},
           {
             $push: {coursesTaken: course}
           },
           function (error, user) {
               if(error){
                 callback(error);
               }else if(!user){
                 var customErr = {
                  origin: "models/users.js",
                  message: "User not found, course taken not saved in DB"
                 };
                 callback(customErr);
               }else{
                 //return one if succesfully push into array coursesTaken
                 callback(null, 1);
               }
           }
    );

  }else{
    //send an error for missing parameters
    var errRes = {
      err: -1,
      message: "Missing parameters in addCourseToUser model: username | course"
    }
    return callback(errRes);
  }
}

// get user by id, email, username
// @param value = string searchValue
// @param property = 'id','username', 'email'

UserSchema.statics.getUserBy = function(value, property, callback){
  //check if value and property is set
  if(value && property){
    //parameter were pass
  }else{
    //send an error for missing parameters
    var errRes = {
      err: -1,
      message: "Missing parameters: value | cproperty"
    }
    return callback(errRes);
  }

  //try to find user and get data if it exist
  User.findOne({username: username})
      .exec(
         function (error, user) {
             if(error){
               callback(error);
             }else if(!user){
               var customErr = {
                origin: "mode/users.js",
                message: "User not found, course taken not save in DB"
               };
               callback(customErr);
             }else{
               //return one if succesfully push into array coursesTaken
               callback(null, 1);
             }
         }
      );

}



var User = mongoose.model('User', UserSchema);
module.exports = User;
