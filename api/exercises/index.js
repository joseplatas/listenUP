const fns = require('./fns.js');
const data = require('./data.js');
const mongoose = require('mongoose');
const levenshtein = require('./libraries/levenshtein.js');

//initialize
var express = require('express');
var path = require('path');
var exerciseRouter = express.Router();
var Course = require('./models/courses');
var User = require('../user/models/users.js');

exerciseRouter.get('/', function(req, res, next) {
  res.send('Course Routers')
});
//get courses form
exerciseRouter.get('/getCourses', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/html/exerciseForm.html'));
});
//verify course answer form
exerciseRouter.get('/verifyCourseAnswer',function(req, res, next){
  res.sendFile(path.join(__dirname + '/html/verifyCourseAnswer.html'));
});

//NOTE: get courses base on post request
//@param String language
//@para String exerciseType
exerciseRouter.post('/getCourses',function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var response = {};

  //check if all parameters are pass
  if(req.body.language && req.body.exerciseType){
    //ALL VALUES WERE \PASS
  }else{
    response.err = -1;
    response.message = "Missing values, you must send a language and exerciseType";
    res.send(response);
    return;
  }
  var language = req.body.language;
  var exerciseType = req.body.exerciseType;
  //get course information
  Course.getCoursesBy(language, exerciseType,function(error, courses){
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
      response.message = "Courses that were found";
      res.send(response)
    }
  });
});

// NOTE: process the answer of a user, added to the users profile
exerciseRouter.post('/verifyCourseAnswer',function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  var response = {};

  //check if all parameters are pass
  if(req.body.username && req.body.courseId && req.body.userAnswer){
    //ALL VALUES WERE \PASS
  }else{
    response.err = -1;
    response.message = "Parameter missing: username | courseId | userAnswer ";
    res.send(response);
    return;
  }
  var username = req.body.username;
  var courseId = req.body.courseId;
  var userAnswer = req.body.userAnswer;

  //get course information
  Course.validateCourseAnswer(courseId, userAnswer,function(error, validateRes){
    //console.log(error);
    //console.log(user);
    if(error || !validateRes){
      response.err = -1;
      response.message = "Error validating course answer";
      response.error = error;
      res.send(response);
    }else{
      //add the course to the user array coursesTaken
      User.addCourseToUser(username, validateRes, function(error, succesUpdate){
        if(error || !succesUpdate){
          response.courseTakenAdded = -1;
          response.validateRes = validateRes;
          response.err = -2;
          response.error = error;
          response.message = "Proccess answer, problem adding to user";
          res.send(response)
        }else{
          //then response with an answer to the document
          response.courseTakenAdded = succesUpdate;
          response.validateRes = validateRes;
          response.err = 0;
          response.message = "Proccess answer, added to user ";
          res.send(response)
        }
      });
    }
  });


});



//NOTE:this will add some data to our course schema
exerciseRouter.get('/buildCourses',function(req, res, next){
  Course.dropAndResetCount(); //drop and reset counter
  //set page header
  res.setHeader('Content-Type', 'application/json');
  var en_trans = data.getCourseData('data/en_trans.json');
  var en_quiz  = data.getCourseData('data/en_quiz.json');
  var es_trans = data.getCourseData('data/es_trans.json');
  var es_quiz = data.getCourseData('data/es_quiz.json');
  var fr_trans = data.getCourseData('data/fr_trans.json');
  var fr_quiz = data.getCourseData('data/fr_quiz.json');

  //concat and build data
  var courses = en_trans.concat(en_quiz).concat(es_trans).concat(es_quiz).concat(fr_trans).concat(fr_quiz);

  //add all of the courses to collection
  var response = {};
  for(var i = 0; i < courses.length ; i++){
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
