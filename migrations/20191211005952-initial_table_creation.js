'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('directors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
      },
      releaseDate: {
        type: Sequelize.DATE,
      },
      rating: {
        type: Sequelize.ENUM('Rating', 'Not Rated', 'G', 'R', 'Passed', 'PG', 'PG-13', 'Approved'),
      },
      runTime: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      genre: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
    await queryInterface.createTable('movies_genres', {
      movieId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'movies',
          key: 'id'
        },
        primaryKey: true
      },
      genreId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'genres',
          key: 'id'
        },
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
    return queryInterface.createTable('movies_directors', {
      movieId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'movies',
          key: 'id'
        },
        primaryKey: true
      },
      directorId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'directors',
          key: 'id'
        },
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    })
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies_diectors')
    await queryInterface.dropTable('movies_genres')
    await queryInterface.dropTable('genres')
    await queryInterface.dropTable('movies')
    return queryInterface.dropTable('directors')
  }
}