const movies = (connection, Sequelize) => {
    return connection.define('movies', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        directors: { type: Sequelize.STRING },
        runtime: { type: Sequelize.STRING },
        genre: { type: Sequelize.STRING },
        releasedate: { type: Sequelize.INTEGER },
        rating: { type: Sequelize.ENUM('Passed', 'Not Rated', 'G', 'PG', 'PG-13', 'R', 'Approved', 'Rating') },
    }, { paranoid: true })
}

module.exports = movies