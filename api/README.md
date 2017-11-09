# API CALLS DOCUMENTATION
This file has the API DOCUMENTATION

### API call: Login and Register
Test forms urls
- http://localhost:8080/api/user/login
- http://localhost:8080/api/user/register

API urls
- http://localhost:8080/api/user/loginPost
- http://localhost:8080/api/user/registerPost



### API Call: Initialize test data
Api call will build courses dummy data base on a json file
It will initialize the courses data
You need to have mongo running

- http://localhost:8080/api/exercises/buildCourses


### API Call: verifyCourseAnswer 
API call will validate the course answer with the users answer.**All parameters** are required in order to process request.

Test Form url
- http://localhost:8080/api/exercises/verifyCourseAnswer



@url http://localhost:8080/api/exercises/verifyCourseAnswer

@method post

@param username, courseId, userAnswer

@return json object

```json
{
  "courseTakenAdded": 1,
  "validateRes": {
    "_id": "59fd0d6288ca5672aa8251d9",
    "courseId": 1,
    "title": "Course title",
    "exerciseType": "transcription",
    "language": "en",
    "points": 10,
    "answer": "answer",
    "userAnswer": "answer",
    "pointsEarned": 10
    },
  "err": 0,
  "message": "Processed answer, added to user "
}
```
