const fns = require('./fns.js')
const data = require('./data.js')

//initialize
var express = require('express');
var path = require('path');
var exerciseRouter = express.Router();
var Course = require('./models/courses');


exerciseRouter.get('/', function(req, res, next) {
    res.send("exercise router");
});

exerciseRouter.get('/trascription',function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var response = {};
  //console.log(res.body);
  //check if all parameters are pass
  // if(req.body.language){
  //   //ALL VALUES WERE PASS
  // }else{
  //   response.err = -1;
  //   response.message = "Missing values";
  //   res.send(response);
  // }
  var language = "es";
  //check if the user exist
  Course.getCoursesByLang(language, function(error, courses){
    //console.log(error);
    //console.log(user);
    if(error || !courses){
      response.err = -1;
      response.message = "Error finding the courses for this language";
      response.error = error;
      res.send(response);
    }else{
      //add session variable
      //req.session.userId = user._id;
      response.courses = courses;
      response.err = 0;
      response.message = "Courses found";
      res.send(response)
    }
  });


});

//this will add some data to our course schema
exerciseRouter.get('/buildCourses',function(req, res, next){
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
  response.err = 0;
  response.message = "Courses Data is set";
  res.send(response);
});




//export routes to /api/index.js
module.exports = exerciseRouter;
