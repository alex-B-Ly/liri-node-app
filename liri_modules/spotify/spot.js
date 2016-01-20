var spot = require('spotify');

exports.spotifyLogic = function(){
  var argv = process.argv.slice(3);

  if(argv[0]){
    // Looks for song name passed by user and returns song info
    spot.search({ type: 'track', query: argv[0]}, function(err, data){
      var songData = data.tracks.items;

      if(err){
        console.log('error type: '+err);
      }else{
        // TODO Make the console log strings into one variable
        songData.forEach(function(song){
          console.log('Artist: ' + song.artists[0].name);
          console.log('Song: ' + song.name);
          console.log('Album: ' + song.album.name);
          console.log('Preview link: ' + song.preview_url);
          console.log('\r\n');
        });
      }
    });

  }else{
    // Default song goes here if no arguments are passed by user
    spot.search({ type: 'track', query: "what's my age again?"}, function(err, data){
      if(err){
        console.log('error type: '+err);
      }else{
        console.log('Artist: ' + data.tracks.items[0].artists[0].name);
        console.log('Song: ' + data.tracks.items[0].name);
        console.log('Album: ' + data.tracks.items[0].album.name);
        console.log('Preview link: ' + data.tracks.items[0].preview_url);
        console.log('\r\n'); 
      }

    });
  }
}