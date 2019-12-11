var express = require('express')
var movies = require('./movies.json')
var bodyParser = require('body-parser')
var models = require('./models')

var app = express()

app.get('/movies', (request, response) => {
    models.movies.findAll({ include: { model: models.movies } }).then((movies) => {
        response.send(movies)
    })
})

app.get('/movies/:identifier', (request, response) => {
    models.movies.findOne({
        where: { identifier: request.params.identifier },
        include: { model: models.movies }
    }).then((matchingMovies) => {
        if (matchingMovies) {
            response.send(matchingMovies)
        } else {
            response.sendStatus(404)
        }
    })
})

app.get('/directors/:identifier', (request, response) => {
    models.movies.findOne({
        where: { identifier: request.params.identifier },
        include: { model: models.movies }
    }).then((directors) => {
        if (directors) {
            response.send(directors)
        } else {
            response.sendStatus(404)
        }
    })
})

app.get('/genres/:identifier', (request, response) => {
    models.movies.findOne({
        where: { identifier: request.params.identifier },
        include: { model: models.movies }
    }).then((genres) => {
        if (genres) {
            response.send(genres)
        } else {
            response.sendStatus(404)
        }
    })
})

app.post('/movies', bodyParser.json(), (request, response) => {
    const { title, directors, releasedate, rating, runtime, genres } = request.body

    if (!title || !directors || !releasedate || !rating || !runtime || !genres) {
        response.status(400).send('The following attributes are required: title, directors, releasedate, rating, runtime, genres')
    }

    // models.movies.findOne({ where: 
    // })
    //const newMovie = { title, directors, releasedate, rating, runtime, genres }

    movies.push(newMovie)
    response.status(201).send(newMovie)
})

app.all('*', (request, response) => {
    response.sendStatus(404)
})

app.listen(1337, () => { console.log('listening in on 1337...') })

module.exports = app