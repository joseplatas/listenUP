export function myFunction() {
    console.log('hi world!')
}

module.exports = {
    //test code
    getUser: function() {
        return fetch('/api/user')
            .then(response => response.text())
    }
}
