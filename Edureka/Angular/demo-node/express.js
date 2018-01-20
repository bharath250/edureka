var express = require('express');
var app = express();
var http = require('http').Server(app);

// Logging, Authentication, Sosmething else
// Middleware
app.use('/lib', express.static('lib'));

app.route('/').get(function (req, res, next){
    res.send('Hello Express');
});

app.route('/').put(function (req, res, next){
    res.send('Hello Express');
});

app.route('/').post(function (req, res, next){
    res.send('Hello Express');
});

app.route('/').patch(function (req, res, next){
    res.send('Hello Express');
});

app.route('/').delete(function (req, res, next){
    res.send('Hello Express');
});

app.route('/about').get(function (req, res){
    res.json({result : 'Hello Express - About About Page'});
});

http.listen(9001, '127.0.0.1', function (){
    console.log('Listening to port 9001');
});