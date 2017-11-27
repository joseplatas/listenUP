var fs = require("fs");
var path = require("path");
var bcrypt = require('bcrypt');
var User = require('./models/users');

module.exports = {
  //compare password that are encripted
  comparePasswords: function(pass, passBcrypt, callback) {

    bcrypt.compare(pass, passBcrypt, function(error, result){
      callback(result);
    });

  },
  // //compare data and update the function
  // updateUserData: function(userInfo, userDB, callback){
  //   var update = {};
  //   //check if username is different
  //   if(userInfo.username == userDB.username){
  //     result.username = 0;
  //   }else{
  //     result.
  //   }
  //   //check if email was different
  //   if(userInfo.newEmail == userDB.email){
  //     result.email = 0;
  //   }
  //   //check if password is the same as the
  //
  //   this.comparePasswords(userInfo.pass)
  //
  //   callback(null, result);
  // }
}
