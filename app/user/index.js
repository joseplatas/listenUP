const components = require('./components.js')
const data = require('./data.js')
const fns = require('./fns.js')
const templates = require('./templates.js')
require('./styles.css')

//test code
data.getUser()
    .then(data => window.alert("Received message from user api: " + data))
