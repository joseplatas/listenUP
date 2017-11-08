# SOME DESCRIPTION TO TEST FORMS
I change the port of the api server to 8080 to avoid problems in my machine

## test urls for user module:
You can submit data using this forms to test if they post handler works

- http://localhost:8080/api/user/login
- http://localhost:8080/api/user/register


## Create test data for courses
You need to go to this url in order to get the data set up.
It will initialize the courses data
You need to have mongo running

http://localhost:8080/api/exercises/buildCourses


## Verify Course Data and added to User Course taken
API call will validate the course answer against the db.
all parameters are required in order to process request.

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
  "message": "Proccess answer, added to user "
}
```
