export function myFunction() {
    console.log('hi world!')
}

module.exports = {
    getUser: function() {
        return fetch('/api/user')
            .then(response => response.text())
    }
}