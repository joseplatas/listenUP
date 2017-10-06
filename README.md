# listenUP
Team repository for CSC 481 Project 2

### Short Description:
ListenUp is a web application that is aimed to help intermediate-level foreign language learners train their listening comprehension. Through the use of Node.js, a user can create an account and progression will be tracked on what language was worked on. The user will go from the Home page to Login or Signup page, then to their Dashboard, and then select exercises, which are offered in three languages: English (EN), French (FR),and Spanish (ES). MongoDB will be used to store all appropriate information regarding user accounts and audio, visual, and answer data for exercises.


## Notes for Team:

### To get the most updated version
- Pull for updated version
- Open two command line windows
- Navigate both to the root of your project folder (location of package.json)
- In one of the windows type this command:
    npm install

### To view frontend and backend progress in browser
- Type one of these commands in each of the windows:
    1)  npm run debug-backend
    2)  npm run debug-frontend
- Open browser
- Go to http://localhost:8000 to view frontend 
- Go to http://localhost:80 to view backend 

### Writing in JSX (not HTML) in component.js with React

- Function render() must return ONE element. Put the entire page in a single element (i.e. div)
- className instead of class
- Check app/user/landing/component.js for example of how to link to other pages
- To properly render a page, see either landing or transcription's component.js file

- update on read me