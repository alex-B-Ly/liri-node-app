var fs = require('fs');

exports.logger = function(stringPass){
  if(stringPass instanceof Array && stringPass[2] === undefined){
    console.log('nothing logged');
    return;
  }else{
    var msg = stringPass + '\r\n';

    fs.appendFile('./log.txt', msg, 'utf-8', function(err){
      if(err){
        console.log(err)
      }
    });
  }
}