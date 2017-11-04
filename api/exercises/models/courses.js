var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  courseId: {
    type: Number,
    required: true,
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
  courseCategory: {
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
  }

});
var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
