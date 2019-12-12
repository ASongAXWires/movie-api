const moviesGenres = (connection, Sequelize, movies, genres) => {
    return connection.define('moviesGenres', {
        movieId: {
            type: Sequelize.INTEGER,
            reference: {
                model: movies,
                key: 'id'
            },
            primaryKey: true
        },
        genreId: {
            type: Sequelize.INTEGER,
            reference: {
                model: genres,
                key: 'id'
            },
            primaryKey: true
        },
    }, {
        paranoid: true
    })
}

module.exports = moviesGenres