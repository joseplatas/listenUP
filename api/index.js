const user = require('./user/index.js')
const exercises = require('./exercises/index.js')
const core = require('./core/index.js')

//initialize variable
var express = require('express');
var path = require('path');
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
//enabling CORS so front-end can talk to back-end.
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/listenup',{ useMongoClient: true });
var db = mongoose.connection;
//mongo error
db.on("error",console.error.bind(console,'connection error'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /public
app.use('/public',express.static(path.join(__dirname, 'public')));

// ROUTER API
var userRouter = require('./user/index');
app.use('/api/user', userRouter);


// default home route response
app.get("/",function(req, res, next){
  res.send("API ListenUp, please use request provided in documentation");
});



//changing to 8080 to avoid collision with others apps the used port 80
app.listen(8080, function (){
    console.log('Back-end listening on port 8080.')
})
