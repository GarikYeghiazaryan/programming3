var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require('socket.io')(server);

app.use(express.static("../public"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

server.listen(process.env.PORT || 3000, function(){
   console.log("Example is running on port 3000");
});

// console.log(matrix);

//sad
matrix = [];
grassArr = [];
gish1Arr = [];
anhetacoxArr = [];
gishatichArr = [];
xotakerArr = [];

Grass = require("./class.grass");
Xotaker = require("./class.eatgrass");
Gishatich = require("./class.predator");
gishatich1 = require("./class.gish1");
Anhetacox = require("./class.anhet");
for (var y = 0; y < 40; y++) {
    matrix[y] = [];
    for (var x = 0; x < 40; x++) {
        matrix[y].push(Math.floor(Math.random() * 2));
    }
}
for (var x = 0; x < 20; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}

for (var x = 0; x < 10; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}

for (var x = 0; x < 10; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var x = 0; x < 15; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 5;
}

setInterval(function(){draw()},1000);
function draw()
{
io.sockets.emit("mish", matrix);
 for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var xot = new Grass(x, y);
                grassArr.push(xot);
            }
            else if (matrix[y][x] == 2) {
                var xot = new Xotaker(x, y);
                xotakerArr.push(xot);
            }
            else if (matrix[y][x] == 3) {
                var xot = new Gishatich(x, y);
                gishatichArr.push(xot);
            }
            else if (matrix[y][x] == 4) {
                var xot = new gishatich1(x, y);
                gish1Arr.push(xot);
            }
              else if (matrix[y][x] == 5) {
                var xot = new Anhetacox(x, y);
                anhetacoxArr.push(xot);
            }
        }
    }

     for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mahanal();
        
    }

    for (var i in gishatichArr) {
       
         gishatichArr[i].utel();
         gishatichArr[i].mahanal();
    }

   
     for (var i in anhetacoxArr) {

        anhetacoxArr[i].sharjvel();
    

    }
     for (var i in gish1Arr) {

        gish1Arr[i].sharjvel();
        gish1Arr[i].utel();
        gish1Arr[i].mahanal();
        

    }
}