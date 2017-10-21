# listenUP
Team repository for CSC 481 Project 2

### Short Description:
ListenUp is a web application that is aimed to help intermediate-level foreign language learners train their listening comprehension. Through the use of Node.js, a user can create an account and progression will be tracked on what language was worked on. The user will go from the Home page to Login or Signup page, then to their Dashboard, and then select exercises, which are offered in three languages: English (EN), French (FR),and Spanish (ES). MongoDB will be used to store all appropriate information regarding user accounts and audio, visual, and answer data for exercises.


## Notes for Team:

### To get the most updated version
- Pull for updated version
- Open command line
- Type "npm install"

### View Progress in Web Browser
- Run "npm run debug" in a command line prompt
- Go to http://localhost:8000 to view frontend 
- Go to http://localhost:80 to view backend 

### Terminal Commands for separate backend/frontend debug
- Open two terminals
- Type one of these commands in each of the windows:
    1)  npm run debug-backend
    2)  npm run debug-frontend
- Open browser
- Go to http://localhost:8000 to view frontend 
- Go to http://localhost:80 to view backend 

### File Structure

### Top Level

/app

/api

/shared


### /app
Includes all code that will run in the browser (front-end)
- Components
- CSS
- HTML / JSX

### /api
Includes all code that will run on a part of your machine
- Express code
- MongoDB access (read, write, delete data)

### /shared
Because all of the code uses the same language, it is possible to share CERTAIN code between both app and api. Examples:
- Validation functions
- Text formatting
- Sorting or filtering algorithms

**Do NOT put code here that needs either the browser OR the server to run:**

- MongoDB code
- React JS code
- API bindings