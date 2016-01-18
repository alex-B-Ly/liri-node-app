// USER CHOICES VARIABLE
var userChoice = process.argv.slice(2);

// API VARIABLES

  // Twitter REQ
  var twit = require('./liri_modules/twitter/twit.js');

  // Spotify REQ

  // OMDB REQ

// END API VARIABLES
debugger;
// USER CHOICE CALLS
switch(userChoice[0]){
  case 'my-tweets':
    twit.twitterLogic();
    break;
  case 'spotify-this-song':
    // TODO spotify function call
    break;
  case 'movie-this':
    // TODO movie function call
    break;
  default:
    console.log('Follow the directions.');
}