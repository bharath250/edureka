var express = require('express');
var app = express();
var http = require('http').Server(app);
var restApi = require("./server/restApiCaller");

app.route('/').get(function (req, res) {
    var option = {
        uri: "/data/2.5/weather?q=London&appid=d121de0aee2c3429577f40ad8cc8b33d",
        baseUrl: "http://api.openweathermap.org",
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    };
    restApi.restApiCaller(option, function (message) {
        console.log(message);
        res.status(message.statusCode);
        res.send(message.message);
        res.end();
    });
});

http.listen(9001, function () {
    console.log('listening on *:9001');
});