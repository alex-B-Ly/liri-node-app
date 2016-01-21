var spot = require('spotify');

exports.spotifyLogic = function(songName){

  if(songName){
    // Looks for song name passed by user and returns song info
    spot.search({ type: 'track', query: songName}, function(err, data){
      var songData = data.tracks.items;

      if(err){
        console.log('error type: '+err);
      }else{
        // TODO Make the console log strings into one variable
        songData.forEach(function(song){
          var songInfo = 'Artist: ' + song.artists[0].name + '\r\n'
          +'Song: ' + song.name + '\r\n'
          +'Album: ' + song.album.name + '\r\n'
          +'Preview link: ' + song.preview_url + '\r\n';

          console.log(songInfo);          
        });
      }
    });

  }else{
    // Default blink 182 song goes here if no arguments are passed by user
    spot.search({ type: 'track', query: "what's my age again?"}, function(err, data){
      var songData = data.tracks.items;
      var songInfo;

      if(err){
        console.log('error type: '+err);
      }else{
        songInfo += 'Artist: ' + songData[0].artists[0].name + '\r\n'
        +'Song: ' + songData[0].name + '\r\n'
        +'Album: ' + songData[0].album.name + '\r\n'
        +'Preview link: ' + songData[0].preview_url + '\r\n'

        console.log(songInfo);
      }

    });
  }
}