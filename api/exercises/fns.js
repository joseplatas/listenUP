var fs = require("fs");
var path = require("path");

module.exports = {
  //clean up the courses data and sent only whats necessary
  //Add url to audioPath
  filterCourseData: function(courses) {
    if(courses == undefined || courses == ""){
      console.error("Courses array not pass");
      return false;
    }

    var apiPath ="http://localhost:8080"
    for (var i = 0; i < courses.length; i++) {
      courses[i].audioPath = apiPath + courses[i].audioPath;
    }

    return courses;
  }
}
