const data = require('./data.js')
const fns = require('./fns.js')



module.exports = {
    configure: function(app) {
        app.get('/api/exercises', function(req, res) {
            res.send("Hello, from exercises system!")
        })
    }
} 