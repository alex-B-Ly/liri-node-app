var lir = require('../../liri.js');
var fs = require('fs');

exports.readFromRandom = function(){
  fs.readFile('./random.txt', 'utf-8', function(err, data){
    if(err){
      console.log(err);
    }else{
      var newArgs = data.split(',');
      lir.outerCommand(newArgs[0], newArgs[1]);
    }
  });
}