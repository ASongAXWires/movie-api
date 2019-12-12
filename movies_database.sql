CREATE DATABASE movies;

USE movies;

CREATE TABLE info (
	id INT AUTO_INCREMENT,
	title VARCHAR(255),
	directors VARCHAR(255),
    runtime VARCHAR(255),
    genre VARCHAR(255),
    releasedate INT,
	rating ENUM('Passed', 'Not Rated', 'G', 'PG', 'PG-13', 'R', 'Approved'),
	createdAt DATETIME DEFAULT NOW(),
	updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
	deletedAt DATETIME DEFAULT NOW(),
	PRIMARY KEY(id)
);
