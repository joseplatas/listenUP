var fs = require("fs");
var path = require("path");

module.exports = {
  getCourseData: function(_filePath) {
    var data = fs.readFileSync(__dirname + "/" + _filePath);
    var jsonData = JSON.parse(data);

    return jsonData;
  }
}
