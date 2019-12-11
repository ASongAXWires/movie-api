const directors = (connection, Sequelize) => {
    return connection.define('directors', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
    }, {
        paranoid: true
    })
}

module.exports = directors