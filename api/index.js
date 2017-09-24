const user = require('./user/index.js')
const exercises = require('./exercises/index.js')
const core = require('./core/index.js')
const express = require('express')

const app = express()

core.configure(app);
user.configure(app);
exercises.configure(app);

app.listen(80, function (){
    console.log('Back-end listening on port 80.')
})