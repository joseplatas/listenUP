const fns = require('./fns.js')
const data = require('./data.js')
//initialize
var express = require('express');
var path = require('path');
var userRouter = express.Router();
var User = require('./models/users');

userRouter.get('/', function(req, res, next) {
    res.send("user router");
});

userRouter.get('/login', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/test/loginForm.html'));
});

userRouter.post('/loginPost', function(req, res, next){
    //PENDING: pending logic to login and create session
    res.send('login post')

});
//register test form
userRouter.get('/register', function(req, res, next) {
    res.sendFile(path.join(__dirname+'/test/registerForm.html'));
});
//register form handler
userRouter.post('/registerPost', function(req, res, next){
  //TO DO IN POST
  //check if all parameters are pass
  if(req.body.email &&
    req.body.fname &&
    req.body.lname &&
    req.body.password &&
    req.body.confirmPassword
  ){
    console.log("All Parameters pass");
  }else{
    console.log("Please enter all parameters");
  }
  //check if passwords are matching
  if(req.body.password !== req.body.confirmPassword){
    //PENDING: need code to valid strength of password
    console.log("Passwords are not matching");
  }
  //assign data to userData object
  var userData = {
    email: req.body.email,
    fname: req.body.fname,
    lname: req.body.lname,
    password: req.body.password,
    confirmPassword: req.body.password
  };
  //call function and insert to collection

  User.create(userData,function(error, user){
    if(error){
      console.log("Error Creating user");
      console.log(error);
      res.send(error);
    }else{
      //PENDING: log the user in and send them to dashboard
      console.log(user);
      res.send('USER CREATED: '+user.email);
    }
  });

});



//export routes to /api/index.js
module.exports = userRouter;
