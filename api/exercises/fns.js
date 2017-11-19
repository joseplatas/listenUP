var fs = require("fs");
var path = require("path");
const levenshtein = require('./libraries/levenshtein.js');

module.exports = {
  //clean up the courses data and sent only whats necessary
  //Add url to audioPath
  filterCourseData: function(courses) {
    //assertion of data
    if(courses == undefined || courses == ""){
      console.error("Courses array not pass");
      return false;
    }

    var apiPath ="http://localhost:8080"
    for (var i = 0; i < courses.length; i++) {
      courses[i].audioPath = apiPath + courses[i].audioPath;
    }

    return courses;
  },
  //validate the points the user earned
  //return obj{courseId,points:}
  validatePointsEarned: function(course, userAnswer){
    //assertion of data
    if(course == undefined || course == "" || userAnswer == undefined || userAnswer == ""){
      console.error("Parameter missing: course | userAnswer");
      return false;
    }
    //make answer to lower case
    //PENDING: remove punctuation when comparing strings
    let courseAnswer = course.answer.toLowerCase().trim();
    userAnswer = userAnswer.toLowerCase().trim();
    let pointsEarned = -1;//placeholder for real value
    //reduced minus points by half
    let minusPoints = (levenshtein.compareString(courseAnswer, userAnswer)) * .5;

    //check what type exerciseType the course is
    if(course.exerciseType == "quiz"){
      //check if matches exactly
      pointsEarned = (minusPoints == 0) ? course.points: 0;
    }else if(course.exerciseType == "transcription"){
      //check how similar is the userAnswer to the courseAnswer
      if(minusPoints >= course.points){
        pointsEarned = 0;
      }else{
        pointsEarned = course.points - minusPoints;
      }
    }

    var response = {
      _id: course._id,
      courseId: course.courseId,
      title: course.title,
      exerciseType: course.exerciseType,
      language: course.language,
      category: course.category,
      points: course.points,
      answer: courseAnswer,
      userAnswer: userAnswer,
      pointsEarned: pointsEarned
    };
    //return an object with the unique course id and points earned
    return response;
  }
}
