var express  = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 5000;
var http = require('http');
var io = require('socket.io')(http);
var socketClient = require('socket.io-client')

var rs = fs.createReadStream('text.txt');
filePath = './text.txt'
//
//rs.once('readable', function() {
//        var buff = rs.read(2); //Read first 8 bytes only once
//        console.log(buff.toString());
// });

let arr = [0,0,0,0,0,0];


fs.watchFile(filePath, function() {
    let main = [];
    console.log('File Changed ...');
    file = fs.readFileSync(filePath);

    fs.writeFile('./text.txt', '', function(){console.log('done')})
    main =  file.toString().split('\n').filter(function(i){
        if(arr[i]==0){
        arr[i]=1;
        return i;
       }
    }).reverse();

    arr=[0,0,0,0,0,0]
    console.log(main)
    let client = socketClient.connect('http://192.168.43.34:9999');
    client.on('connect', function () {
        client.emit("blink",main);
    })

});




app.listen(port, function() {

    console.log("Server is listening on port " + port )
})

