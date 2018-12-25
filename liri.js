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
    console.log
}