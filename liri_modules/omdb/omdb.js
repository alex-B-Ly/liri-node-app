var request = require('request');

exports.omdbLogic = function(userMovie){

  function movieChoose(movie){
    request('http://www.omdbapi.com/?t='+movie+'&tomatoes=true', function(error, response, body){
      var infoDestringed = JSON.parse(body);

      // movieInfo returns all relevant info
      var movieInfo = 'Title: '+ infoDestringed.Title + '\r\n'
      +'Year: ' + infoDestringed.Year + '\r\n' 
      +'Imdb rating: ' + infoDestringed.imdbRating + '\r\n'
      +'Country: ' + infoDestringed.Country + '\r\n'
      +'Language: ' + infoDestringed.Language + '\r\n'
      +'Plot: ' + infoDestringed.Plot + '\r\n'
      +'Actors: ' + infoDestringed.Actors + '\r\n'
      +'Tomato Rating: ' + infoDestringed.tomatoRating + '\r\n'
      +'Tomato url: ' + infoDestringed.tomatoURL + '\r\n';

      if(error){
        console.log('error type: '+error);
      }else{
        console.log(movieInfo);
      }
    });
  }

  if(userMovie){
    movieChoose(userMovie);
  }else{
    movieChoose('mr nobody');
  }


}