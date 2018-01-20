var express = require('express');
var app = express();
var http = require('http').Server(app);

app.route('/user/:id').get(function (req, res){
    console.log(req.params.id);
    res.send('Hello : ' + req.params.id);
});

app.route('/').get(function (req, res){
    console.log(req.query.username);
    res.send('Hello : ' + req.query.username);
});

http.listen(9001, '127.0.0.1', function (){
    console.log('Listening to port 9001');
});