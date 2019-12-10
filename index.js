var express = require('express')
var movies = require('./movies.json')
const bodyParser = require('body-parser')

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

app.post('/movies', bodyParser.json(), (request, response) => {
    const { title, directors, releasedate, rating, runtime, genres } = request.body

    if (!title || !directors || !releasedate || !rating || !runtime || !genres) {
        response.status(400).send('The following attributes are required: title, directors, releasedate, rating, runtime, genres')
    }

    const newMovie = { title, directors, releasedate, rating, runtime, genres }

    movies.push(newMovie)
    response.status(201).send(newMovie)
})

app.all('*', (request, response) => {
    response.sendStatus(404)
})

app.listen(1337, () => { console.log('listening in on 1337...') })

module.exports = app