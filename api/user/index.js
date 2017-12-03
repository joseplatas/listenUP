const fns = require('./fns.js')
const data = require('./data.js')


//initialize
var express = require('express');
var path = require('path');
var userRouter = express.Router();
var User = require('./models/users');
var Course = require('../exercises/models/courses')


userRouter.get('/', function(req, res, next) {
    res.send("User Routers");
});
//login api form
userRouter.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/html/loginForm.html'));
});
//register api form
userRouter.get('/register', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/test/registerForm.html'));
});
//settings api form
userRouter.get("/settings",function(req, res, next){
  res.sendFile(path.join(__dirname,'/html/settingsForm.html'));
});

//update settings
userRouter.post("/settingsPost",function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var response = {};

  //check if all parameters are pass
  if(req.body._id){
    //ALL VALUES WERE PASS
  }else{
    response.err = -1;
    response.message = "Missing _id";
    res.send(response);
  }
  //assign variables
  var userInfo = {
    _id: req.body._id,
    username: req.body.username,
    email: req.body.email,
    newPassword: (req.body.newPassword != undefined)?req.body.newPassword: "",
    currentPassword: (req.body.currentPassword != undefined)?req.body.currentPassword: ""
  };
  var userDB = {};
  //get user information and comparte it to see to update it
  User.getUserById(userInfo._id, function(error, user){
    if(error || !user){
      //if an error, or user is not found
      response.err = -1;
      response.message = "User not found";
      response.error = error;
      res.send(response);
    }else if (user.active == 0) {
      //if unactive user, then send response
      response.err = -2;
      response.message = "Unactive user";
      res.send(response);
    }else{
      userDB = user;
      //Check if passwords are matching, if so update the data that is different
      fns.comparePasswords(userInfo.currentPassword, userDB.password, function(result){
        //correct password
        if(result){
          var passwordOkay = result; //
          //update the data the was different
          User.updateUserInfo(userInfo, passwordOkay, function(error, result){
            response.err = 0;
            response.message = "Updated information";
            res.send(response)
          });
        }else{
          response.err = -3;
          response.message = "Current Password was incorrect";
          res.send(response);
        }

      });
    }
  });



});


//login handler
userRouter.post('/loginPost', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    var response = {};

    //check if all parameters are pass
    if(req.body.email && req.body.password){
      //ALL VALUES WERE PASS
    }else{
      response.err = -1;
      response.message = "Missing values";
      res.send(response);
    }
    //check if the user exist
    User.authenticate(req.body.email, req.body.password, function(error, user){

      if(error || !user){
        //if an error, or user is not found
        response.err = -1;
        response.message = "User not found";
        response.error = error;
        res.send(response);
      }else if (user.active == 0) {
        //if unactive user, then send response
        response.err = -2;
        response.message = "Unactive user";
        res.send(response);
      }else{
        //send user id and email
        response._id = user._id;
        response.username = user.username;
        response.email = user.email;
        response.err = 0;
        response.message = "User found";
        res.send(response)
      }
    });
});
//handle the register post
userRouter.post('/registerPost', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var response = {};
  // console.log("Data send from react");
  //check if all parameters are pass
  if(req.body.username && req.body.email && req.body.password && req.body.confirmPassword){
    //ALL VALUES WERE PASS
  }else{
    response.err = -1;
    response.message = "Missing values";
    res.send(response);
    return;
  }

  //check if passwords are matching
  if(req.body.password !== req.body.confirmPassword){
    response.err = -2;
    response.message = "Password not matching";
    res.send(response);
    return;
  }
  //assign data to userData object
  var userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.password
  };
  //call function and insert to collection
  User.create(userData,function(error, user){
    if(error){
      response.err = -3;
      response.message = "Email or username is already in used";
      response.error = error;

      res.send(response);
    }else{
      //PENDING: log the user in and send them to dashboard
      response._id = user._id;
      response.username = user.username;
      response.email = user.email;
      response.err = 0;
      response.message = "Successfully created user"

      res.send(response);
    }
  });

});

//will gathers all of the information needed for the dashboard
userRouter.get('/dashboard/:username', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    
    Course.getAllCoursesBasicInfo(function(err, allCourses) {
      User.getCourseInfo(req.params.username, function(err, userCourses) {
        res.send(JSON.stringify(fns.analyzeDashboard(allCourses, userCourses)))
      })
    })
});


//export routes to /api/index.js
module.exports = userRouter;
