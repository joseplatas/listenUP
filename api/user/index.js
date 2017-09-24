const fns = require('./fns.js')
const data = require('./data.js')

module.exports = {
    configure: function (app) {
        app.get('/api/user', function(req, res) {
            res.send("Hello, from users system!")
        })
    }
}