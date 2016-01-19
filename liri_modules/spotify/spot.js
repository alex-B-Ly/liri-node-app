// TODO install npm spotify package and make require var here

exports.spotifyLogic = function(){
  var argv = process.argv.slice(2);

  if(argv[1]){
    // TODO Build out song logic to return info
    console.log('song chosen: '+ argv[1]);
  }else{
    // TODO Default song will go here
    console.log('please choose a song.');
  }
}