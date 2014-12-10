var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var server = require('http').createServer(app);
var Twit = require('twit');
var port = process.env.PORT || 3000;

var T = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
});



app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/twitter/:test',function(req,res){
  var twit_stream = req.params.test;

  // T.get('search/tweets', { q: twit_stream + ' since:2014-12-10', count: 1 }, function(err, data, response) {
  //    render(twit_stream, data.statuses[0].text)
  //   });

  // var render = function(name, content){
  //   res.render('index', {name: name, content: content } );
  // }


  T.get('search/tweets', { q: twit_stream + ' since:2014-12-10', count: 3 }, function(err, data, response) {
     console.log(data.statuses)
     render(twit_stream, data.statuses)
    });

  var render = function(name, content){
    res.render('index', {name: name, content: content } );
  }

});

app.get('/', function(request, response){
  response.send("Hello world");
});

app.get('/jason', function(request, response){
  response.json({"attila": "legend", "beanie_hat": "the best"});
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;