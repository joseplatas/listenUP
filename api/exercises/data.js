var fs = require("fs");
var path = require("path");

module.exports = {
  getCourseData: function() {
    var data = fs.readFileSync(__dirname + "/test/courseData.json");
    var jsonData = JSON.parse(data);

    return jsonData;
  }
}
