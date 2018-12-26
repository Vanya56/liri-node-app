require("dotenv").config();
let request = require("request");
const moment = require("moment");
const fs = require("fs");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
// OMDB and Bands in Town api's
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);
// User command input
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

// app logic
function userCommand(userInput, userQuery) {
    switch (userInput) {
        case "concert-this":
        concertThis();
        break;
        case "spotify-this":
        spotifyThisSong();
        break;
        case "movie-this":
        movieThis();
        break;
        case "do-this":
        doThis(userQuery);
        break;
        default:
        console.log("I don't understand, try again.");
        break;
    }
}
userCommand(userInput, userQuery);

function concertThis() {
console.log(`/n - - - - - /n/nSEARCING FOR...${userQuery}'s next show...`);
request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp" + bandsintown +
response, body); {
    if(!error && response.statusCode === 200) {
        let userBand = JSON.parse(body);
        if(userBand.length > 0){
            for(i = 0; i < 1; i++){
                // log data
                console.log(`/nArtist: ${userBand[i].lineup[0]} /nVenue: ${userBand[i]
                    .venue.name}/nVenue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}/nVenue:
                    City: ${userBand[i].venue.city}`)
                    // Format moment.js MM/DD/YYYY
                    let concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY");
                    console.log(`Date and Time: ${concertDate}/n/n- - - - -`);
            }
        }else {
            console.log("Band or Concert not found!");
        }
    }
}
}

function spotifyThisSong() {
    console.log(`/n - - - - - /n/nSEARCHING FOR ..."${userQuery}"`);
    if(!userQuery) { 
        userQuery = "the sign ace of base"};
    spotify.search({ type: "track", query: userQuery, limit: 1}, function(error, data) {
        if(error) {
            console.log("Error occured: " + error);
        }
        let spotifyArr = dara.tracks.items;

        for(i = 0; i < spotifyArr.length; i++) {
            console.log(`/n/nArtist: ${data.tracks.items[i].album.artists[0].name}
            /nSong: ${data.tracks.items[i].name}/nSpotify link: ${data.tracks.items[i].exturnal_urls.spotify}
            /nAlbums: ${data.tracks.items[i].album.name}/n/n - - - - - `)
             
        }
    })
}

function movieThis(){
    console.log(`/n - - - - - /n/nSEARCHING FOR ..."${userQuery}"`);
    if(!userQuery) { 
        userQuery = "Mr nobody"; }; 
        request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=trilogy", function(error, response){
            let userMovie = JSON.parse(body);

            let ratingsArr = userMovie.Ratings;
            if(ratingsArr.length > 2) {
            }

            if(!error && response.statusCode === 200) {
                console.log(`/n/nTitle: ${userMovie.Title}/nCast: ${userMovie.Actors}
                /nRealesed: ${userMovie.Year}/nIMDB Rating: ${userMovie.imdbRating}/nRotten Tomatoes: ${userMovie.Ratings[1].value}
                /nCountry: ${userMovie.Country}/nLanguage: ${userMovie.Language}/nPlot: ${userMovie.Plot}/n/n - - - - - `)
            }else {
                console.log("Movie not found: " + error);
            }
        })
}

function doThis() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) { return console.log(error);}

        let dataArr = data.split(",");
        userInput = dataArr[0];
        userQuery = dataArr[1];

        userCommand(userInput, userQuery);
    })
}