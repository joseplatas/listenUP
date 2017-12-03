var fs = require("fs");
var path = require("path");
const levenshtein = require('./libraries/levenshtein.js');

function removePunctuation(s){ 
  //replace any punctuation with spaces.
  //if there are many consecutive punctuation characters, they'll all be replaced by a single space, as dictated by the '+' in the RegEx.
  return s.replace(/[^a-zA-Z]+/g, ' ')
}

function prepareForComparison(s) {
  return removePunctuation(s.toLowerCase())
          .trim();
}

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
    const preparedCourseAnswer = prepareForComparison(course.answer)
    const preparedUserAnswer = prepareForComparison(userAnswer)
    let pointsEarned = -1;//placeholder for real value
    //reduced minus points by half
    let minusPoints = (levenshtein.compareString(preparedCourseAnswer, preparedUserAnswer)) * .5;

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
      answer: course.answer,
      userAnswer: userAnswer,
      pointsEarned: pointsEarned,
      dateCreated: new Date()
    };
    //return an object with the unique course id and points earned
    return response;
  }
}
