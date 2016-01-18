var Twitter = require('twitter');
var keys = require('./twitKeys.js');

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

exports.twitterLogic = function(){
  var params = {screen_name: 'alexLy_webDev'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    var tweetNum = 0;

    if (error) {
      console.log(error);
    }else{
      for(var i=0; i<tweets.length; i++){
        console.log('\r\n');
        console.log('Tweet id: ' + tweets[i].id);
        console.log('Time: ' + tweets[i].created_at);
        console.log(tweets[i].user.screen_name + ' said:');
        console.log(tweets[i].text);
        tweetNum++;

        if(tweetNum === 20){
          return;
        }
      }
    }
  });
}