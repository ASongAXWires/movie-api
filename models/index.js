const Sequelize = require('sequelize')
const moviesModel = require('./movies')
const directorsModel = require('./directors')
const genresModel = require('./genres')
const moviesGenresModel = require('./moviesGenres')
const moviesDirectorsModel = require('./moviesDirectors')
const allConfigs = require('../config/sequelize')


const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
})

const movies = moviesModel(connection, Sequelize)
const directors = directorsModel(connection, Sequelize)
const genres = genresModel(connection, Sequelize)
const moviesGenres = moviesGenresModel(connection, Sequelize)
const moviesDirectors = moviesDirectorsModel(connection, Sequelize)

movies.belongsToMany(directors, {
    through: moviesDirectors
})

directors.hasMany(movies, {
    through: moviesDirectors
})

movies.belongsToMany(genres, {
    through: moviesGenres
})

genres.hasMany(movies, {
    through: moviesGenres
})

module.exports = {
    movies,
    directors,
    genres,
    moviesGenres,
    moviesDirectors
}