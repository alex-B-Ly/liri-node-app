var fs = require('fs');

exports.readFromRandom = function(){
  fs.readFile('./random.txt', 'utf-8', function(err, data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }
  });
}