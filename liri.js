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
response, body) {
    if(!error && response.statusCode === 200) {
        let userBand = JSON.parse(body);
        if(userBand.length > 0){
            for(i = 0; i < 1; i++){
                // log data
                console.log(`/nArtist: ${userBand[i].lineup[0]} /nVenue: ${userBand[i]
                    .venue.name}/nVenue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}/nVenue
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