const user = require('./user/index.js')
const exercises = require('./exercises/index.js')
const core = require('./core/index.js')

//initialize variable
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();

core.configure(app);
user.configure(app);
exercises.configure(app);

app.listen(80, function (){
    console.log('Back-end listening on port 80.')
})
