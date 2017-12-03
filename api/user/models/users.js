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

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 10, function(err,hash){
    if(err){
      return next(err);
    }
    user.password = hash;
    next();
  });

});
UserSchema.statics.getCourseInfo = function(username, callback) {
  const field = path => `$coursesTaken.${path}`

  User.aggregate([
    { $match: { username: username } },
    { $unwind: '$coursesTaken' },
    {
      $project: {
        id: field('courseId'),
        date: field('dateCreated'),
        exerciseType: field('exerciseType'),
        points: field('pointsEarned'),
        language: field('language'),
        _id: 0
      }
    },
    { $sort: { date: 1 } }
  ], callback)
}
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

// get user by id
// @param value

UserSchema.statics.getUserById = function(_id, callback){
  //check if value and property is set
  if(_id){
    //parameter were pass
  }else{
    //send an error for missing parameters
    var errRes = {
      err: -1,
      message: "Missing parameters: _id"
    }
    return callback(errRes);
  }

  //try to find user and get data if it exist
  User.findOne({_id: _id})
      .exec(
         function (error, user) {
             if(error){
               callback(error);
             }else if(!user){

               var customErr = {
                origin: "mode/users.js",
                message: "User not found"
               };
               callback(customErr);
             }else{
               //return one if succesfully push into array coursesTaken
               callback(null, user);
             }
         }
      );
}


//update the information of user in settings
UserSchema.statics.updateUserInfo = function(userInfo, passwordOkay, callback){
  //check if value and property is set
  if(userInfo._id){
    //parameter were pass
  }else{
    //send an error for missing parameters
    var errRes = {
      err: -1,
      message: "Missing parameters: userInfo._id"
    }
    return callback(errRes);
  }

  User.findById(userInfo._id, function(error, user){
    if(error){
      //if an error, or user is not found
      response.err = -1;
      response.message = "User not found";
      response.error = error;
      res.send(response);
    }

    //check if is the same username
    if(userInfo.username.length > 1 && userInfo.username != user.username){
      console.log("updating username");
      user.set({
        username: userInfo.username
      });
    }
    //check if it the same email
    if(userInfo.email.length > 1 && userInfo.email != user.email){
      console.log("Updating email");
      user.set({
        email: userInfo.email
      });
    }
    //check if the new password field was set
    if(userInfo.newPassword.length > 1 && passwordOkay){
      console.log("Updating password");
      user.set({
          password: userInfo.newPassword
      });
    }

    //update the date updated
    user.set({
      dateUpdated: Date.now()
    });
    //save the data
    user.save(function(error, user){
      if(error){
        callback(error);
      }else{
        callback(null, 1);
      }
    });

  });

}


var User = mongoose.model('User', UserSchema);
module.exports = User;
