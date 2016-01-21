// USER CHOICES VARIABLE
var userChoice = process.argv.slice(2);

// API VARIABLES

  // Twitter REQ
  var twit = require('./liri_modules/twitter/twit.js');

  // Spotify REQ
  var spot = require('./liri_modules/spotify/spot.js');

  // OMDB REQ
  var omdb = require('./liri_modules/omdb/omdb.js');

  // Obey! REQ
    // TODO Add do what it says functionality

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
    // TODO movie function call
    omdb.omdbLogic();
    break;
  default:
    console.log('Follow the directions.');
}