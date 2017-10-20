const user = require('./user/index.js')
const exercises = require('./exercises/index.js')
const core = require('./core/index.js')

//initialize variable
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

//app module
var app = express();

//uses sessions for tracking loings
app.use(session({
  secret: "secretvalue",
  resave: true,
  saveUninitialized: false
}));

// mongodb connection
mongoose.connect('mongodb://localhost:27017/listenup',{ useMongoClient: true });
var db = mongoose.connection;
//mongo error
db.on("error",console.error.bind(console,'connection error'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from /public
//app.use(express.static(__dirname + '/public'));

// include routes
var userRouter = require('./user/index');
app.use('/api/user', userRouter);


/*
The app.configure() function has been removed in EXPRESS 4.
Use the process.env.NODE_ENV or app.get('env') function to detect the environment and configure the app accordingly.
*/
// core.configure(app);
// user.configure(app);
// exercises.configure(app);

//changing to 8080 to avoid collision with others apps the used port 80
app.listen(8080, function (){
    console.log('Back-end listening on port 8080.')
})
