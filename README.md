# liri-node-app

# Here is a link to watch a demo of the app.
https://drive.google.com/file/d/12VKDAoXaaqPswzfJ5LLjIZGBmK0nqpqn/view

# About liri app
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

# What each command does
Spotify
`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base

# Movies
`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* Rotten Tomatoes Rating.
* Rotten Tomatoes URL.
* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

# Bands in town
`node liri.js concert-this <artist/band name here>`
* This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

# Do What It Says
`node liri.js do-what-it-says`

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

* It will run spotify-this-song for "I Want it That Way,".

Feel free to change the text in that document to test out the feature for other commands.

Author
Vanya Levchenko

License
MIT License