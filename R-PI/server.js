/**
 * Created by rishabhkhanna on 07/10/17.
 */

const keypress = require('keypress');
const servo = require('pi-servo');
const app = require('express')();
keypress(process.stdin);

const http = require('http').Server(app); 
const io = require('socket.io')(http);

let sv18 = new servo(18);
let sv23 = new servo(23);
let sv24 = new servo(24);
app.get('/', function (req, res) {
    res.send({success: true});
})



io.on('connection', function (socket) {


    socket.on('blink',function (data) {
        console.log(data[0]);
        console.log(typeof data[0]);
        if(data[0] === '1'){
            moveHand('g')
        }

        if (data[0] === '4'){
            moveHand('l')
        }
    })
    console.log("connection");
    socket.on('message', function (data) {
        let input = JSON.parse(data).msgChar;
        if (input === 'h' || input === 'H'){
            let a = 0;
            let interval = setInterval(function () {
                if(a%2 === 0){
                    moveHand('g')
                }else{
                    moveHand('l')
                }
                a++;
                if(a === 6){
                    clearInterval(interval);
                }
            },500)
        }else{
            moveHand(input);
        }

    })
});

function moveHand(input) {
    console.log(input);
    if (input === 'g' || input === 'G') {
        sv18.open().then(function () {
            sv18.setDegree(180);
        })
        sv23.open().then(function () {
            sv23.setDegree(180);
        })
        sv24.open().then(function () {
            sv24.setDegree(180);
        })

    }
    if (input === 'l' || input === 'l') {
        sv18.open().then(function () {
            sv18.setDegree(0);
        })
        sv23.open().then(function () {
            sv23.setDegree(0);
        })
        sv24.open().then(function () {
            sv24.setDegree(0);
        })
    }
    if (input === 'p' || input === 'P') {
        sv18.open().then(function () {
            sv18.setDegree(180);
        })
        sv23.open().then(function () {
            sv23.setDegree(0);
        })
        sv24.open().then(function () {
            sv24.setDegree(180);
        })
    }

    if(input === 'h' || input === 'H'){
        sv18.open().then(function () {
            sv18.setDegree(180);
        })
        sv23.open().then(function () {
            sv23.setDegree(180);
        })
        sv24.open().then(function () {
            sv24.setDegree(180);
        })


        sv18.open().then(function () {
            sv18.setDegree(0);
        })
        sv23.open().then(function () {
            sv23.setDegree(0);
        })
        sv24.open().then(function () {
            sv24.setDegree(0);
        })

    }

    if(input === 't' || input === 'T'){
        sv18.open().then(function () {
            sv18.setDegree(180);
        })
        sv23.open().then(function () {
            sv23.setDegree(180);
        })
        sv24.open().then(function () {
            sv24.setDegree(0);
        })

    }
}
process.stdin.on('keypress', function (ch, key) {
    console.log("-----" + key.name);
    if (key.name === 'g' || key.name === 'G') {
        moveHand('g')
    }
    if (key.name === 'l' || key.name === 'L') {
        moveHand('l')
    }

    if(key.name === 'p' || key.name === 'P'){
        moveHand('p')
    }

    if(key.name === 'h' || key.name === 'H'){
                let a = 0;
                let interval = setInterval(function () {
                    if(a%2 === 0){
                        moveHand('g')
                    }else{
                        moveHand('l')
                    }
                    a++;
                    if(a === 6){
                        clearInterval(interval);
                    }
                },500)



        }

        if(key.name === 't'){
        moveHand('t');
        }

    if (key && key.ctrl && key.name === 'c') {
        console.log("std in pause");
        process.stdin.pause();
        process.exit();
    }
//     console.log("-------")
//     console.log(key.name);
//     if(key.name === 'q'){
//         sv18.open().then(function(){
//             sv18.setDegree(0); // 0 - 180
//         });
//     }
//
//     if(key.name === 'w'){
//         sv18.open().then(function(){
//             sv18.setDegree(180); // 0 - 180
//         });
//     }
//
//     if(key.name === 'e'){
//         sv23.open().then(function(){
//             sv23.setDegree(0); // 0 - 180
//         });
//
//     }
//
//     if (key.name === 'r'){
//         sv23.open().then(function(){
//             sv23.setDegree(180); // 0 - 180
//         });
//     }
//
//     if(key.name === 't'){
//         sv24.open().then(function(){
//             sv24.setDegree(0); // 0 - 180
//         });
//     }
//
//     if(key.name === 'y'){
//         sv24.open().then(function(){
//             sv24.setDegree(180); // 0 - 180
//         });
//     }
//

});
process.stdin.setRawMode(true);
process.stdin.resume();

http.listen('9999', () => {
    console.log("Magic happens at 9999");
});

