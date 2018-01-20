var fs = require('fs');

fs.writeFile('./output.txt', "Some dummy text", function (){
    console.log("1 - Finished writing to output.txt");
});

fs.readFile('./inputfile1.txt', 'utf8', function (err, data){
    fs.appendFile('./output.txt', data, function(){
        console.log("2 - Finished appending to output.txt");
    });
    console.log("2 - Finished reading from inputfile1.txt");
});

fs.readFile('./inputfile2.txt', 'utf8', function (err, data){
    fs.writeFile('./output.txt', data, function(){
        console.log("4 - Finished appending to output.txt");
    });
    console.log("5 - Finished reading from inputfile2.txt");
});