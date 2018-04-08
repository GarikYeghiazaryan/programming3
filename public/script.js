var matrix = [
    [0,0,0,0,0,],
    [0,0,0,0,0,],
    [0,0,5,0,4,],
    [0,0,0,0,0,],
    [0,0,0,0,4,]
    
];
var side = 10;
var grassArr = [];
var gish1Arr = [];
var anhetacoxArr = [];
var gishatichArr = [];
var xotakerArr = [];


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

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
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
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
             else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
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
