const fns = require('./fns.js')
const data = require('./data.js')

//initialize
var express = require('express');
var path = require('path');
var userRouter = express.Router();
var User = require('./models/users');
var Course = require('./models/courses');


userRouter.get('/', function(req, res, next) {
    res.send("user router");
});

userRouter.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/test/loginForm.html'));
});

//login handler
userRouter.post('/loginPost', function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    var response = {};
    //console.log("Data send from react");
    //console.log(res.body);
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
      //console.log(error);
      //console.log(user);
      if(error || !user){
        response.err = -1;
        response.message = "User not found";
        response.error = error;
        res.send(response);
      }else{
        //add session variable
        //req.session.userId = user._id;
        response.user_id = user._id;
        response.username = user.username;
        response.err = 0;
        response.message = "User found";
        res.send(response)
      }
    });
});
//register test form
userRouter.get('/register', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/test/registerForm.html'));
});
userRouter.post('/registerPost', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var response = {};
  // console.log("Data send from react");
  // console.log(res.body);
  //check if all parameters are pass
  if(req.body.username && req.body.email && req.body.password && req.body.confirmPassword){
    //ALL VALUES WERE PASS
  }else{
    response.err = -1;
    response.message = "Missing values";
    res.send(response);
  }

  //check if passwords are matching
  if(req.body.password !== req.body.confirmPassword){
    response.err = -2;
    response.message = "Password not matching";
    res.send(response);
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
      response.err = 0;
      response.message = "Successfully created user"

      res.send(response);
    }
  });

});


userRouter.get('/dashboard', function(req, res, next) {
    res.send("Dashboard Router");
});
//this will add some data to our course schema
userRouter.get('/dashboard/coursesInit',function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var courses = data.getCourseData(); //gets data from json

  for(var i = 0; i < courses.length ; i++){
    //tries to add it to the table
    var response = {};
    Course.create(courses[i],function(error, course){
      if(error){
        response.err = -1;
        response.message = "Course already in db";
        response.error = error;
        console.log(response);
      }else{
        response.courseId = course.courseId;
        response.title = course.title;
        response.err = 0;
        response.message = "Course added";
        console.log(response);
      }
    });
  }

  response.message = "Courses Data is set";
  res.send(response);
});




//export routes to /api/index.js
module.exports = userRouter;
