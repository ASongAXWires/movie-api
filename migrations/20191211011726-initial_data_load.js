'use strict';

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert('directors', [{
      name: 'Sidney Lumet'
    },
    {
      name: 'Stanley Kubrick'
    },
    {
      name: 'Sam Wood'
    },
    {
      name: 'Elia Kazan'
    },
    {
      name: 'Joseph L. Mankiewicz'
    },
    {
      name: 'Alan J. Pakula'
    },
    {
      name: 'George Lucas'
    },
    {
      name: 'Woody Allen'
    },
    {
      name: 'Francis Ford Coppola'
    },
    {
      name: 'William Wyler'
    },
    {
      name: 'Ridley Scott'
    },
    {
      name: 'Arthur Penn'
    },
    {
      name: 'Howard Hawks'
    },
    {
      name: 'George Roy Hill'
    },
    {
      name: 'Bob Fosse'
    },
    {
      name: 'Michael Curtiz'
    },
    {
      name: 'Roman Polanski'
    },
    {
      name: 'Orson Welles'
    },
    {
      name: 'Charles Chaplin'
    },
    {
      name: 'Spike Lee'
    },
    {
      name: 'Billy Wilder'
    },
    {
      name: 'Leo McCarey'
    },
    {
      name: 'Steven Spielberg'
    },
    {
      name: 'Dennis Hopper'
    },
    {
      name: 'Robert Zemeckis'
    },
    {
      name: 'Victor Fleming'
    },
    {
      name: 'Martin Scorsese'
    },
    {
      name: 'Fred Zinnemann'
    },
    {
      name: 'Norman Jewison'
    },
    {
      name: 'D. W. Griffith'
    },
    {
      name: 'Frank Capra'
    },
    {
      name: 'Merian C. Cooper'
    },
    {
      name: 'David Lean'
    },
    {
      name: 'Robert Altman'
    },
    {
      name: 'John Schlesinger'
    },
    {
      name: 'Alfred Hitchcock'
    },
    {
      name: 'Milos Forman'
    },
    {
      name: 'Oliver Stone'
    },
    {
      name: 'Quentin Tarantino'
    },
    {
      name: 'John G. Avildsen'
    },
    {
      name: 'George Stevens'
    },
    {
      name: 'Gene Kelly'
    },
    {
      name: 'William Cottrell'
    },
    {
      name: 'Preston Sturges'
    },
    {
      name: 'F.W. Murnau'
    },
    {
      name: 'John Huston'
    },
    {
      name: 'Michael Cimino'
    },
    {
      name: 'William Friedkin'
    },
    {
      name: 'Buster Keaton'
    },
    {
      name: 'Mike Nichols'
    },
    {
      name: 'John Ford'
    },
    {
      name: 'Peter Bogdanovich'
    },
    {
      name: 'Peter Jackson'
    },
    {
      name: 'George Cukor'
    },
    {
      name: 'Frank Darabont'
    },
    {
      name: 'Jonathan Demme'
    },
    {
      name: 'M. Night Shyamalan'
    },
    {
      name: 'Robert Wise'
    },
    {
      name: 'Sam Peckinpah'
    },
    {
      name: 'James Cameron'
    },
    {
      name: 'Robert Mulligan'
    },
    {
      name: 'Sydney Pollack'
    },
    {
      name: 'John Lasseter'
    },
    {
      name: 'Clint Eastwood'
    },
    {
      name: 'Chester Franklin'
    },
    {
      name: 'James Fitzpatrick'
    },
    {
      name: 'Ernest B. Schoedsack'
    },
    {
      name: 'Stanley Donen'
    },
    {
      name: 'David Hand'
    },
    {
      name: 'Wilfred Jackson'
    },
    {
      name: 'Larry Morey'
    },
    {
      name: 'Perce Pearce'
    },
    {
      name: 'Ben Sharpsteen'
    },
    {
      name: 'Anthony Mann'
    },
    {
      name: 'Clyde Bruckman'
    },
    {
      name: 'King Vidor'
    },
    {
      name: 'Jerome Robbins'
    },
    ])
    await queryInterface.bulkInsert('movies', [{
      title: '12 Angry Men',
      releaseDate: '1957-04-10',
      rating: 'Not Rated',
      runTime: 95
    },
    {
      title: '2001: A Space Odyssey',
      releaseDate: '1968-04-03',
      rating: 'G',
      runTime: 140
    },
    {
      title: 'A Clockwork Orange',
      releaseDate: '1971-12-19',
      rating: 'R',
      runTime: 137
    },
    {
      title: 'A Night At The Opera',
      releaseDate: '1935-11-15',
      rating: 'Passed',
      runTime: 90
    },
    {
      title: 'A Streetcar Named Desire',
      releaseDate: '1952-03-22',
      rating: 'PG',
      runTime: 125
    },
    {
      title: 'All About Eve',
      releaseDate: '1950-10-27',
      rating: 'Passed',
      runTime: 138
    },
    {
      title: 'All The President\'s Men',
      releaseDate: '1976-04-01',
      rating: 'PG',
      runTime: 136
    },
    {
      title: 'American Graffiti',
      releaseDate: '1973-08-11',
      rating: 'PG',
      runTime: 110
    },
    {
      title: 'Annie Hall',
      releaseDate: '1977-04-20',
      rating: 'PG',
      runTime: 94
    },
    {
      title: 'Apocalypse Now',
      releaseDate: '1979-08-15',
      rating: 'R',
      runTime: 157
    },
    {
      title: 'Ben-Hur',
      releaseDate: '1960-01-29',
      rating: 'G',
      runTime: 212
    },
    {
      title: 'Blade Runner',
      releaseDate: '1982-06-25',
      rating: 'R',
      runTime: 124
    },
    {
      title: 'Bonnie And Clyde',
      releaseDate: '1967-08-13',
      rating: 'R',
      runTime: 111
    },
    {
      title: 'Bringing Up Baby',
      releaseDate: '1938-02-18',
      rating: 'Not Rated',
      runTime: 102
    },
    {
      title: 'Butch Cassidy And The Sundance Kid',
      releaseDate: '1969-10-24',
      rating: 'PG',
      runTime: 112
    },
    {
      title: 'Cabaret',
      releaseDate: '1972-02-13',
      rating: 'PG',
      runTime: 124
    },
    {
      title: 'Casablanca',
      releaseDate: '1943-01-23',
      rating: 'PG',
      runTime: 103
    },
    {
      title: 'Chinatown',
      releaseDate: '1974-06-20',
      rating: 'R',
      runTime: 132
    },
    {
      title: 'Citizen Kane',
      releaseDate: '1941-09-05',
      rating: 'PG',
      runTime: 119
    },
    {
      title: 'City Lights',
      releaseDate: '1931-03-07',
      rating: 'G',
      runTime: 87
    },
    {
      title: 'Do The Right Thing',
      releaseDate: '1989-06-30',
      rating: 'R',
      runTime: 120
    },
    {
      title: 'Double Indemnity',
      releaseDate: '1944-04-24',
      rating: 'Passed',
      runTime: 106
    },
    {
      title: 'Dr. Strangelove',
      releaseDate: '1964-01-29',
      rating: 'PG',
      runTime: 102
    },
    {
      title: 'Duck Soup',
      releaseDate: '1933-11-17',
      rating: 'Not Rated',
      runTime: 80
    },
    {
      title: 'E.T',
      releaseDate: '1982-06-11',
      rating: 'PG',
      runTime: 120
    },
    {
      title: 'Easy Rider',
      releaseDate: '1969-07-14',
      rating: 'R',
      runTime: 95
    },
    {
      title: 'Forrest Gump',
      releaseDate: '1994-07-06',
      rating: 'PG-13',
      runTime: 142
    },
    {
      title: 'Gone With The Wind',
      releaseDate: '1940-01-17',
      rating: 'Passed',
      runTime: 220
    },
    {
      title: 'Goodfellas',
      releaseDate: '1990-09-19',
      rating: 'R',
      runTime: 146
    },
    {
      title: 'High Noon',
      releaseDate: '1952-07-30',
      rating: 'PG',
      runTime: 87
    },
    {
      title: 'In The Heat Of The Night',
      releaseDate: '1967-08-02',
      rating: 'Not Rated',
      runTime: 110
    },
    {
      title: 'Intolerance',
      releaseDate: '1916-09-05',
      rating: 'Passed',
      runTime: 197
    },
    {
      title: 'It Happened One Night',
      releaseDate: '1934-02-23',
      rating: 'Not Rated',
      runTime: 105
    },
    {
      title: 'It\'S A Wonderful Life',
      releaseDate: '1947-01-07',
      rating: 'PG',
      runTime: 132
    },
    {
      title: 'Jaws',
      releaseDate: '1975-06-20',
      rating: 'PG',
      runTime: 124
    },
    {
      title: 'King Kong',
      releaseDate: '1933-04-07',
      rating: 'Passed',
      runTime: 110
    },
    {
      title: 'Lawrence Of Arabia',
      releaseDate: '1962-12-16',
      rating: 'Approved',
      runTime: 180
    },
    {
      title: 'M*A*S*H',
      releaseDate: '1970-03-01',
      rating: 'R',
      runTime: 116
    },
    {
      title: 'Midnight Cowboy',
      releaseDate: '1969-05-25',
      rating: 'R',
      runTime: 113
    },
    {
      title: 'Modern Times',
      releaseDate: '1936-02-21',
      rating: 'G',
      runTime: 87
    },
    {
      title: 'Mr. Smith Goes to Washington',
      releaseDate: '1939-10-19',
      rating: 'Not Rated',
      runTime: 130
    },
    {
      title: 'Nashville',
      releaseDate: '1975-06-11',
      rating: 'R',
      runTime: 157
    },
    {
      title: 'Network',
      releaseDate: '1976-11-14',
      rating: 'R',
      runTime: 121
    },
    {
      title: 'North By Northwest',
      releaseDate: '1959-09-26',
      rating: 'Not Rated',
      runTime: 136
    },
    {
      title: 'On The Waterfront',
      releaseDate: '1954-06-22',
      rating: 'Not Rated',
      runTime: 107
    },
    {
      title: 'One Flew Over The Cuckoo\'s Nest',
      releaseDate: '1975-11-19',
      rating: 'R',
      runTime: 133
    },
    {
      title: 'Platoon',
      releaseDate: '1986-12-19',
      rating: 'R',
      runTime: 120
    },
    {
      title: 'Psycho',
      releaseDate: '1960-09-08',
      rating: 'R',
      runTime: 108
    },
    {
      title: 'Pulp Fiction',
      releaseDate: '1994-10-14',
      rating: 'R',
      runTime: 154
    },
    {
      title: 'Raging Bull',
      releaseDate: '1980-12-19',
      rating: 'R',
      runTime: 129
    },
    {
      title: 'Raiders Of The Lost Ark',
      releaseDate: '1981-06-12',
      rating: 'PG',
      runTime: 115
    },
    {
      title: 'Rear Window',
      releaseDate: '1954-09-01',
      rating: 'PG',
      runTime: 112
    },
    {
      title: 'Rocky',
      releaseDate: '1976-12-03',
      rating: 'PG',
      runTime: 121
    },
    {
      title: 'Saving Private Ryan',
      releaseDate: '1998-07-24',
      rating: 'R',
      runTime: 170
    },
    {
      title: 'Schindler\'s List',
      releaseDate: '1993-12-15',
      rating: 'R',
      runTime: 185
    },
    {
      title: 'Shane',
      releaseDate: '1953-08-01',
      rating: 'Not Rated',
      runTime: 118
    },
    {
      title: 'Singin\' In The Rain',
      releaseDate: '1952-04-11',
      rating: 'G',
      runTime: 103
    },
    {
      title: 'Snow White And The Seven Dwarfs',
      releaseDate: '1938-02-04',
      rating: 'G',
      runTime: 86
    },
    {
      title: 'Some Like It Hot',
      releaseDate: '1959-04-14',
      rating: 'Not Rated',
      runTime: 120
    },
    {
      title: 'Sophie\'S Choice',
      releaseDate: '1982-12-10',
      rating: 'R',
      runTime: 157
    },
    {
      title: 'Spartacus',
      releaseDate: '1960-11-17',
      rating: 'PG-13',
      runTime: 195
    },
    {
      title: 'Star Wars',
      releaseDate: '1977-05-25',
      rating: 'PG',
      runTime: 123
    },
    {
      title: 'Sullivan\'s Travels',
      releaseDate: '1942-02-06',
      rating: 'Not Rated',
      runTime: 91
    },
    {
      title: 'Sunrise',
      releaseDate: '1927-11-04',
      rating: 'Passed',
      runTime: 94
    },
    {
      title: 'Sunset Blvd',
      releaseDate: '1950-09-29',
      rating: 'Not Rated',
      runTime: 115
    },
    {
      title: 'Swing Time',
      releaseDate: '1936-09-04',
      rating: 'Not Rated',
      runTime: 103
    },
    {
      title: 'Taxi Driver',
      releaseDate: '1976-02-07',
      rating: 'R',
      runTime: 112
    },
    {
      title: 'The African Queen',
      releaseDate: '1952-03-21',
      rating: 'PG',
      runTime: 106
    },
    {
      title: 'The Apartment',
      releaseDate: '1960-09-16',
      rating: 'Not Rated',
      runTime: 125
    },
    {
      title: 'The Best Years Of Our Lives',
      releaseDate: '1947-05-29',
      rating: 'Approved',
      runTime: 172
    },
    {
      title: 'The Bridge On The River Kwai',
      releaseDate: '1957-12-14',
      rating: 'PG',
      runTime: 161
    },
    {
      title: 'The Deer Hunter',
      releaseDate: '1978-12-08',
      rating: 'R',
      runTime: 183
    },
    {
      title: 'The French Connection',
      releaseDate: '1971-10-01',
      rating: 'R',
      runTime: 104
    },
    {
      title: 'The General',
      releaseDate: '1927-02-05',
      rating: 'Passed',
      runTime: 77
    },
    {
      title: 'The Godfather',
      releaseDate: '1972-03-24',
      rating: 'R',
      runTime: 177
    },
    {
      title: 'The Godfather Part Ii',
      releaseDate: '1974-12-20',
      rating: 'R',
      runTime: 200
    },
    {
      title: 'The Gold Rush',
      releaseDate: '1925-08-16',
      rating: 'Not Rated',
      runTime: 74
    },
    {
      title: 'The Graduate',
      releaseDate: '1967-12-21',
      rating: 'PG',
      runTime: 105
    },
    {
      title: 'The Grapes Of Wrath',
      releaseDate: '1940-03-15',
      rating: 'Passed',
      runTime: 129
    },
    {
      title: 'The Last Picture Show',
      releaseDate: '1971-10-01',
      rating: 'R',
      runTime: 118
    },
    {
      title: 'The Lord Of The Rings: The Fellowship Of The Ring',
      releaseDate: '2001-12-19',
      rating: 'PG-13',
      runTime: 178
    },
    {
      title: 'The Maltese Falcon',
      releaseDate: '1941-10-18',
      rating: 'Not Rated',
      runTime: 100
    },
    {
      title: 'The Philadelphia Story',
      releaseDate: '1941-01-17',
      rating: 'Not Rated',
      runTime: 112
    },
    {
      title: 'The Searchers',
      releaseDate: '1956-05-26',
      rating: 'Passed',
      runTime: 119
    },
    {
      title: 'The Shawshank Redemption',
      releaseDate: '1994-10-14',
      rating: 'R',
      runTime: 142
    },
    {
      title: 'The Silence Of The Lambs',
      releaseDate: '1991-02-14',
      rating: 'R',
      runTime: 120
    },
    {
      title: 'The Sixth Sense',
      releaseDate: '1999-08-06',
      rating: 'PG-13',
      runTime: 107
    },
    {
      title: 'The Sound Of Music',
      releaseDate: '1965-04-01',
      rating: 'G',
      runTime: 175
    },
    {
      title: 'The Treasure Of The Sierra Madre',
      releaseDate: '1948-01-24',
      rating: 'Passed',
      runTime: 128
    },
    {
      title: 'The Wild Bunch',
      releaseDate: '1969-06-18',
      rating: 'R',
      runTime: 135
    },
    {
      title: 'The Wizard Of Oz',
      releaseDate: '1939-08-25',
      rating: 'PG',
      runTime: 101
    },
    {
      title: 'Titanic',
      releaseDate: '1997-12-19',
      rating: 'PG-13',
      runTime: 197
    },
    {
      title: 'To Kill A Mockingbird',
      releaseDate: '1962-12-25',
      rating: 'Not Rated',
      runTime: 129
    },
    {
      title: 'Tootsie',
      releaseDate: '1982-12-17',
      rating: 'PG',
      runTime: 116
    },
    {
      title: 'Toy Story',
      releaseDate: '1995-11-22',
      rating: 'G',
      runTime: 81
    },
    {
      title: 'Unforgiven',
      releaseDate: '1992-08-07',
      rating: 'R',
      runTime: 130
    },
    {
      title: 'Vertigo',
      releaseDate: '1958-05-28',
      rating: 'PG',
      runTime: 120
    },
    {
      title: 'West Side Story',
      releaseDate: '1961-12-23',
      rating: 'Not Rated',
      runTime: 155
    },
    {
      title: 'Who\'s Afraid Of Virginia Woolf?',
      releaseDate: '1966-06-22',
      rating: 'Not Rated',
      runTime: 131
    },
    {
      title: 'Yankee Doodle Dandy',
      releaseDate: '1943-01-02',
      rating: 'Passed',
      runTime: 126
    },
    ])
    await queryInterface.bulkInsert('genres', [{
      genre: 'Drama'
    },
    {
      genre: 'Science fiction'
    },
    {
      genre: 'Comedy'
    },
    {
      genre: 'Romantic comedy'
    },
    {
      genre: 'Epic'
    },
    {
      genre: 'Biography'
    },
    {
      genre: 'Screwball comedy'
    },
    {
      genre: 'Comedy-drama'
    },
    {
      genre: 'Romance'
    },
    {
      genre: 'Mystery'
    },
    {
      genre: 'Film noir'
    },
    {
      genre: 'Black comedy'
    },
    {
      genre: 'Fantasy'
    },
    {
      genre: 'Western'
    },
    {
      genre: 'Adventure'
    },
    {
      genre: 'Horror'
    },
    {
      genre: 'Musical comedy'
    },
    {
      genre: 'Musical'
    },
    {
      genre: 'Thriller'
    },
    ])
    await queryInterface.bulkInsert('movies_genres', [{
      movieId: 1,
      genreId: 1
    },
    {
      movieId: 2,
      genreId: 2
    },
    {
      movieId: 3,
      genreId: 1
    },
    {
      movieId: 3,
      genreId: 13
    },
    {
      movieId: 4,
      genreId: 3
    },
    {
      movieId: 5,
      genreId: 1
    },
    {
      movieId: 6,
      genreId: 1
    },
    {
      movieId: 7,
      genreId: 1
    },
    {
      movieId: 8,
      genreId: 3
    },
    {
      movieId: 9,
      genreId: 4
    },
    {
      movieId: 10,
      genreId: 1
    },
    {
      movieId: 11,
      genreId: 5
    },
    {
      movieId: 12,
      genreId: 2
    },
    {
      movieId: 13,
      genreId: 6
    },
    {
      movieId: 13,
      genreId: 1
    },
    {
      movieId: 14,
      genreId: 7
    },
    {
      movieId: 15,
      genreId: 8
    },
    {
      movieId: 15,
      genreId: 14
    },
    {
      movieId: 16,
      genreId: 1
    },
    {
      movieId: 16,
      genreId: 18
    },
    {
      movieId: 17,
      genreId: 9
    },
    {
      movieId: 18,
      genreId: 10
    },
    {
      movieId: 18,
      genreId: 9
    },
    {
      movieId: 19,
      genreId: 1
    },
    {
      movieId: 20,
      genreId: 8
    },
    {
      movieId: 21,
      genreId: 1
    },
    {
      movieId: 22,
      genreId: 11
    },
    {
      movieId: 23,
      genreId: 12
    },
    {
      movieId: 24,
      genreId: 3
    },
    {
      movieId: 25,
      genreId: 13
    },
    {
      movieId: 25,
      genreId: 2
    },
    {
      movieId: 26,
      genreId: 1
    },
    {
      movieId: 27,
      genreId: 8
    },
    {
      movieId: 28,
      genreId: 9
    },
    {
      movieId: 29,
      genreId: 1
    },
    {
      movieId: 30,
      genreId: 14
    },
    {
      movieId: 31,
      genreId: 1
    },
    {
      movieId: 32,
      genreId: 1
    },
    {
      movieId: 33,
      genreId: 7
    },
    {
      movieId: 34,
      genreId: 8
    },
    {
      movieId: 34,
      genreId: 13
    },
    {
      movieId: 35,
      genreId: 1
    },
    {
      movieId: 36,
      genreId: 15
    },
    {
      movieId: 36,
      genreId: 16
    },
    {
      movieId: 37,
      genreId: 15
    },
    {
      movieId: 37,
      genreId: 6
    },
    {
      movieId: 38,
      genreId: 3
    },
    {
      movieId: 39,
      genreId: 1
    },
    {
      movieId: 40,
      genreId: 3
    },
    {
      movieId: 41,
      genreId: 8
    },
    {
      movieId: 42,
      genreId: 8
    },
    {
      movieId: 42,
      genreId: 18
    },
    {
      movieId: 43,
      genreId: 8
    },
    {
      movieId: 44,
      genreId: 1
    },
    {
      movieId: 45,
      genreId: 1
    },
    {
      movieId: 46,
      genreId: 1
    },
    {
      movieId: 47,
      genreId: 1
    },
    {
      movieId: 48,
      genreId: 16
    },
    {
      movieId: 48,
      genreId: 10
    },
    {
      movieId: 48,
      genreId: 19
    },
    {
      movieId: 49,
      genreId: 8
    },
    {
      movieId: 50,
      genreId: 6
    },
    {
      movieId: 51,
      genreId: 15
    },
    {
      movieId: 52,
      genreId: 10
    },
    {
      movieId: 53,
      genreId: 1
    },
    {
      movieId: 54,
      genreId: 1
    },
    {
      movieId: 55,
      genreId: 1
    },
    {
      movieId: 56,
      genreId: 14
    },
    {
      movieId: 57,
      genreId: 17
    },
    {
      movieId: 58,
      genreId: 18
    },
    {
      movieId: 59,
      genreId: 3
    },
    {
      movieId: 60,
      genreId: 1
    },
    {
      movieId: 61,
      genreId: 5
    },
    {
      movieId: 62,
      genreId: 15
    },
    {
      movieId: 62,
      genreId: 2
    },
    {
      movieId: 63,
      genreId: 8
    },
    {
      movieId: 64,
      genreId: 1
    },
    {
      movieId: 64,
      genreId: 9
    },
    {
      movieId: 65,
      genreId: 1
    },
    {
      movieId: 66,
      genreId: 18
    },
    {
      movieId: 66,
      genreId: 4
    },
    {
      movieId: 67,
      genreId: 1
    },
    {
      movieId: 68,
      genreId: 9
    },
    {
      movieId: 69,
      genreId: 8
    },
    {
      movieId: 70,
      genreId: 1
    },
    {
      movieId: 71,
      genreId: 1
    },
    {
      movieId: 72,
      genreId: 1
    },
    {
      movieId: 73,
      genreId: 1
    },
    {
      movieId: 74,
      genreId: 3
    },
    {
      movieId: 75,
      genreId: 1
    },
    {
      movieId: 76,
      genreId: 1
    },
    {
      movieId: 77,
      genreId: 8
    },
    {
      movieId: 78,
      genreId: 8
    },
    {
      movieId: 79,
      genreId: 1
    },
    {
      movieId: 80,
      genreId: 1
    },
    {
      movieId: 81,
      genreId: 15
    },
    {
      movieId: 81,
      genreId: 1
    },
    {
      movieId: 81,
      genreId: 13
    },
    {
      movieId: 82,
      genreId: 1
    },
    {
      movieId: 83,
      genreId: 4
    },
    {
      movieId: 84,
      genreId: 14
    },
    {
      movieId: 85,
      genreId: 1
    },
    {
      movieId: 86,
      genreId: 1
    },
    {
      movieId: 87,
      genreId: 1
    },
    {
      movieId: 87,
      genreId: 10
    },
    {
      movieId: 87,
      genreId: 19
    },
    {
      movieId: 88,
      genreId: 18
    },
    {
      movieId: 88,
      genreId: 1
    },
    {
      movieId: 89,
      genreId: 1
    },
    {
      movieId: 89,
      genreId: 15
    },
    {
      movieId: 90,
      genreId: 14
    },
    {
      movieId: 91,
      genreId: 13
    },
    {
      movieId: 91,
      genreId: 18
    },
    {
      movieId: 92,
      genreId: 1
    },
    {
      movieId: 92,
      genreId: 9
    },
    {
      movieId: 93,
      genreId: 1
    },
    {
      movieId: 94,
      genreId: 8
    },
    {
      movieId: 94,
      genreId: 9
    },
    {
      movieId: 95,
      genreId: 3
    },
    {
      movieId: 96,
      genreId: 14
    },
    {
      movieId: 97,
      genreId: 9
    },
    {
      movieId: 98,
      genreId: 1
    },
    {
      movieId: 98,
      genreId: 18
    },
    {
      movieId: 99,
      genreId: 1
    },
    {
      movieId: 100,
      genreId: 6
    },
    {
      movieId: 100,
      genreId: 18
    },
    ])
    return queryInterface.bulkInsert('movies_directors', [{
      movieId: 1,
      directorId: 1
    },
    {
      movieId: 2,
      directorId: 2
    },
    {
      movieId: 3,
      directorId: 2
    },
    {
      movieId: 4,
      directorId: 3
    },
    {
      movieId: 5,
      directorId: 4
    },
    {
      movieId: 6,
      directorId: 5
    },
    {
      movieId: 7,
      directorId: 6
    },
    {
      movieId: 8,
      directorId: 7
    },
    {
      movieId: 9,
      directorId: 8
    },
    {
      movieId: 10,
      directorId: 9
    },
    {
      movieId: 11,
      directorId: 10
    },
    {
      movieId: 12,
      directorId: 11
    },
    {
      movieId: 13,
      directorId: 12
    },
    {
      movieId: 14,
      directorId: 13
    },
    {
      movieId: 15,
      directorId: 14
    },
    {
      movieId: 16,
      directorId: 15
    },
    {
      movieId: 17,
      directorId: 16
    },
    {
      movieId: 18,
      directorId: 17
    },
    {
      movieId: 19,
      directorId: 18
    },
    {
      movieId: 20,
      directorId: 19
    },
    {
      movieId: 21,
      directorId: 20
    },
    {
      movieId: 22,
      directorId: 21
    },
    {
      movieId: 23,
      directorId: 2
    },
    {
      movieId: 24,
      directorId: 22
    },
    {
      movieId: 25,
      directorId: 23
    },
    {
      movieId: 26,
      directorId: 24
    },
    {
      movieId: 27,
      directorId: 25
    },
    {
      movieId: 28,
      directorId: 26
    },
    {
      movieId: 28,
      directorId: 3
    },
    {
      movieId: 28,
      directorId: 27
    },
    {
      movieId: 28,
      directorId: 28
    },
    {
      movieId: 28,
      directorId: 29
    },
    {
      movieId: 29,
      directorId: 30
    },
    {
      movieId: 30,
      directorId: 31
    },
    {
      movieId: 31,
      directorId: 32
    },
    {
      movieId: 32,
      directorId: 33
    },
    {
      movieId: 33,
      directorId: 34
    },
    {
      movieId: 34,
      directorId: 34
    },
    {
      movieId: 35,
      directorId: 23
    },
    {
      movieId: 36,
      directorId: 35
    },
    {
      movieId: 36,
      directorId: 36
    },
    {
      movieId: 37,
      directorId: 37
    },
    {
      movieId: 38,
      directorId: 38
    },
    {
      movieId: 39,
      directorId: 39
    },
    {
      movieId: 40,
      directorId: 19
    },
    {
      movieId: 41,
      directorId: 34
    },
    {
      movieId: 42,
      directorId: 38
    },
    {
      movieId: 43,
      directorId: 1
    },
    {
      movieId: 44,
      directorId: 40
    },
    {
      movieId: 45,
      directorId: 4
    },
    {
      movieId: 46,
      directorId: 41
    },
    {
      movieId: 47,
      directorId: 42
    },
    {
      movieId: 48,
      directorId: 40
    },
    {
      movieId: 49,
      directorId: 43
    },
    {
      movieId: 50,
      directorId: 30
    },
    {
      movieId: 51,
      directorId: 23
    },
    {
      movieId: 52,
      directorId: 40
    },
    {
      movieId: 53,
      directorId: 44
    },
    {
      movieId: 54,
      directorId: 23
    },
    {
      movieId: 55,
      directorId: 23
    },
    {
      movieId: 56,
      directorId: 45
    },
    {
      movieId: 57,
      directorId: 46
    },
    {
      movieId: 57,
      directorId: 47
    },
    {
      movieId: 58,
      directorId: 48
    },
    {
      movieId: 58,
      directorId: 49
    },
    {
      movieId: 58,
      directorId: 50
    },
    {
      movieId: 58,
      directorId: 51
    },
    {
      movieId: 58,
      directorId: 52
    },
    {
      movieId: 58,
      directorId: 53
    },
    {
      movieId: 59,
      directorId: 21
    },
    {
      movieId: 60,
      directorId: 6
    },
    {
      movieId: 61,
      directorId: 2
    },
    {
      movieId: 61,
      directorId: 54
    },
    {
      movieId: 62,
      directorId: 7
    },
    {
      movieId: 63,
      directorId: 55
    },
    {
      movieId: 64,
      directorId: 56
    },
    {
      movieId: 65,
      directorId: 21
    },
    {
      movieId: 66,
      directorId: 45
    },
    {
      movieId: 67,
      directorId: 30
    },
    {
      movieId: 68,
      directorId: 57
    },
    {
      movieId: 69,
      directorId: 21
    },
    {
      movieId: 70,
      directorId: 10
    },
    {
      movieId: 71,
      directorId: 37
    },
    {
      movieId: 72,
      directorId: 58
    },
    {
      movieId: 73,
      directorId: 59
    },
    {
      movieId: 74,
      directorId: 60
    },
    {
      movieId: 74,
      directorId: 61
    },
    {
      movieId: 75,
      directorId: 9
    },
    {
      movieId: 76,
      directorId: 9
    },
    {
      movieId: 77,
      directorId: 19
    },
    {
      movieId: 78,
      directorId: 62
    },
    {
      movieId: 79,
      directorId: 63
    },
    {
      movieId: 80,
      directorId: 64
    },
    {
      movieId: 81,
      directorId: 65
    },
    {
      movieId: 82,
      directorId: 57
    },
    {
      movieId: 83,
      directorId: 27
    },
    {
      movieId: 84,
      directorId: 63
    },
    {
      movieId: 85,
      directorId: 66
    },
    {
      movieId: 86,
      directorId: 67
    },
    {
      movieId: 87,
      directorId: 68
    },
    {
      movieId: 88,
      directorId: 69
    },
    {
      movieId: 89,
      directorId: 57
    },
    {
      movieId: 90,
      directorId: 70
    },
    {
      movieId: 91,
      directorId: 26
    },
    {
      movieId: 91,
      directorId: 71
    },
    {
      movieId: 92,
      directorId: 72
    },
    {
      movieId: 93,
      directorId: 73
    },
    {
      movieId: 94,
      directorId: 74
    },
    {
      movieId: 95,
      directorId: 75
    },
    {
      movieId: 96,
      directorId: 76
    },
    {
      movieId: 97,
      directorId: 40
    },
    {
      movieId: 98,
      directorId: 69
    },
    {
      movieId: 98,
      directorId: 77
    },
    {
      movieId: 99,
      directorId: 62
    },
    {
      movieId: 100,
      directorId: 16
    },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('movies_directors', null, {})
    await queryInterface.bulkDelete('movies_genres', null, {})
    await queryInterface.bulkDelete('genres', null, {})
    await queryInterface.bulkDelete('directors', null, {})
    return queryInterface.bulkDelete('movies', null, {})
  },
}