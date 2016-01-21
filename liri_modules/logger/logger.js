var fs = require('fs');

exports.logger = function(stringPass){
  var msg = stringPass + '\r\n';

  fs.appendFile('./log.txt', msg, 'utf-8', function(err){
    if(err){
      console.log(err)
    }
  });
}