var express = require('express')
var movies = require('./movies.json')

var app = express()

app.get('/movies', (request, response) => {
    response.send(movies)
})

app.get('/movies/:identifier', (request, response) => {
    var matchingMovies = movies.filter((item) => {
        return item.identifier === request.params.identifier
    })
    if (matchingMovies.length) {
        response.send(matchingMovies)
    } else {
        response.sendStatus(404)
    }
})

app.all('*', (request, response) => {
    response.sendStatus(404)
})

app.listen(1337, () => { console.log('listening in on 1337...') })

module.exports = app