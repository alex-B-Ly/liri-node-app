// USER CHOICES VARIABLE
var userChoice = process.argv.slice(2);

// FILE SYSTEM
var fs = require('fs');
// LOG REQ
var logger = require('./liri_modules/logger/logger.js');

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
function commandMe(command, commandArg){
  switch(command){
    case 'my-tweets':
      twit.twitterLogic();
      break;
    case 'spotify-this-song':
      spot.spotifyLogic(commandArg);
      break;
    case 'movie-this':
      omdb.omdbLogic(commandArg);
      break;
    case 'do-what-it-says':
    case 'obey':
      obey.readFromRandom();
      break;
    default:
      console.log('Follow the directions.');
  }
}

exports.outerCommand = commandMe;

logger.logger(userChoice);
commandMe(userChoice[0], userChoice[1]);