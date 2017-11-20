const fns = require('../fns.js');

var mongoose = require('mongoose');
var mongooseAutoIncrement = require('mongoose-auto-increment');
mongooseAutoIncrement.initialize(mongoose.connection);

var CourseSchema = new mongoose.Schema({
  courseId: {
    type: Number,
    default: 0,
    unique: true
  },
  title:{
    type: String,
    required: true,
    trim: true
  },
  exerciseType: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  question:{
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  },
  audioPath: {
    type: String,
    trim: true
  },
  videoUrl: {
    type: String,
    trim: true
  },
  answerOptions: {
    type: Array,
    trim: true
  },
  badgeName: {
    type: String,
    trim: true
  },
  badgeDescription: {
    type:String,
    trim: true
  },
  badgeUrl: {
    type: String,
    trim: true
  },
  points: {
    type: Number,
    required: true
  },
  dateCreated:{
    type: Date,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    default: Date.now
  }

});

//auto increment
CourseSchema.plugin(mongooseAutoIncrement.plugin, {
  model: 'CourseSchema',
  field: 'courseId',
  startAt: 1,
  incrementBy: 1
});

//Method drops table and reinitialized the courseId to start at 1 again
CourseSchema.statics.dropAndResetCount = function(){
  //drop table and add new Data
  mongoose.connection.db.dropCollection('courses',function(error, result){
    if (error) {
      console.log(error)
    }
    console.log('Courses collection drop: ' + result);
  });
  //reset the auto-increment value to 1 again
  //method describe in plugin documentation
  var course = new Course();
  course.save(function (err) {
    course.nextCount(function(err, count) {
        course.resetCount(function(err, nextCount) {
        });
    });
  });

}

//authenticate input against database document
CourseSchema.statics.getCoursesBy = function(language, exerciseType, callback){
  //check parameters to see what to answer
  if(language && exerciseType){
    Course.find({language: language, exerciseType: exerciseType})
          .exec(
            function(error,courses){
              //if there is an error, return it on the callback
              if(error){
                return callback(error);
              }else if(!courses){
                return callback(error);
              }
              //clean up data before sending it back
              courses = fns.filterCourseData(courses);
              return callback(null, courses);
          });
  }else if(language){
    Course.find({language: language})
          .exec(
            function(error,courses){
              //if there is an error, return it on the callback
              if(error){
                return callback(error);
              }else if(!courses){
                return callback(error);
              }
              //clean up data before sending it back
              courses = fns.filterCourseData(courses);
              return callback(null, courses);
          });
  }

}
//validate the answer and give back a score
CourseSchema.statics.validateCourseAnswer = function(courseId, userAnswer, callback){
  //check if course_id and userAnswer was pass
  if(courseId && userAnswer){
    Course.findOne({courseId: courseId})
          .exec(
            function(error,course) {
              //if there is an error, return it on the callback
              if(error){
                return callback(error);
              }else if(!course){
                //course was not found
                var errRes = {
                  message: "Course with courseId = "+courseId+" was not found"
                }
                return callback(errRes);
              }
              //check if answer matches the one in the course
              //get back an object with points earned
              var validateResp = fns.validatePointsEarned(course, userAnswer);
              return callback(null, validateResp);
            }
          );
  }else{
    //send an error for missing parameters
    var errRes = {
      err: -1,
      message: "Missing parameters: courseId or userAnswer"
    }
    return callback(errRes);
  }

}



var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
