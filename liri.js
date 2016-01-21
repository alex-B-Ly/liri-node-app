// USER CHOICES VARIABLE
var userChoice = process.argv.slice(2);

// FILE SYSTEM
// var fs = require('fs');

// API VARIABLES

  // Twitter REQ
  var twit = require('./liri_modules/twitter/twit.js');

  // Spotify REQ
  var spot = require('./liri_modules/spotify/spot.js');

  // OMDB REQ
  var omdb = require('./liri_modules/omdb/omdb.js');

  // Obey! REQ
  var obey = require('./liri_modules/do-what-it-says/obey.js');

// END API VARIABLES

// USER CHOICE CALLS
switch(userChoice[0]){
  case 'my-tweets':
    twit.twitterLogic();
    break;
  case 'spotify-this-song':
    spot.spotifyLogic();
    break;
  case 'movie-this':
    omdb.omdbLogic();
    break;
  case 'obey':
    obey.readFromRandom();
    break;
  default:
    console.log('Follow the directions.');
}