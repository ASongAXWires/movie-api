const moviesDirectors = (connection, Sequelize, movies, directors) => {
    return connection.define('moviesDirectors', {
        movieId: {
            type: Sequelize.INTEGER,
            reference: {
                model: movies,
                key: 'id'
            },
            primaryKey: true
        },
        directorId: {
            type: Sequelize.INTEGER,
            reference: {
                model: directors,
                key: 'id'
            },
            primaryKey: true
        },
    }, {
        paranoid: true
    })
}

module.exports = moviesDirectors