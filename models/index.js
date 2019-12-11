const Sequelize = require('sequelize')
const moviesModel = require('./movies')
const directorsModel = require('./directors')
const genresModel = require('./genres')
const moviesGenresModel = require('./moviesGenres')
const moviesDirectorsModel = require('./moviesDirectors')
const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const { host, database, username, password, dialect } = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const movies = moviesModel(connection, Sequelize)
const directors = directorsModel(connection, Sequelize)
const genres = genresModel(connection, Sequelize)
const moviesGenres = moviesGenresModel(connection, Sequelize)
const moviesDirectors = moviesDirectorsModel(connection, Sequelize)

module.exports = {
    movies,
    directors,
    genres,
    moviesGenres,
    moviesDirectors
}