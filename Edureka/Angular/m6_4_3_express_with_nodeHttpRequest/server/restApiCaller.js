
var request = require("request");

module.exports.restApiCaller =function(option, cb){
    request(option, function (error, response, body) {
        if (error) {
            cb({message: error,statusCode:500});
        }
        else {
            cb({message: body,statusCode:response.statusCode});
        }
    })
}

