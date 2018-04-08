class Grass extends LivingCreature{
    constructor(x,y){
        super(x,y);
        this.multiply = 0;
    }
    // constructor(x, y) {
    //     this.x = x;
    //     this.y = y;
    //     this.multiply = 0;
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1]
    //     ];
    // }
    // yntrelVandak(ch) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == ch) {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak && this.multiply >= 1) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}
class Xotaker extends LivingCreature{
    constructor(x, y, energy) {
        super(x,y);
        this.energy = energy;
        this.mahxot = 0;
      
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    // yntrelVandak(ch) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == ch) {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }

    sharjvel() {
        var norVandak2 = random(this.yntrelVandak(0));
        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahxot = 0;



        }
    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak1 = random(this.yntrelVandak(1));
        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 2;

            for (var i in grassArr) {
                if (norVandak1[1] == grassArr[i].y && norVandak1[0] == grassArr[i].x)
                    grassArr.splice(i, 1);
            }
            this.energy = 5;
            this.mahxot++;
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {

        this.stanalNorKordinatner();

        var norVandak1 = random(this.yntrelVandak(0));

        if (norVandak1 && this.mahxot >= 5) {
            var norXotaker1 = new Xotaker(norVandak1[0], norVandak1[1]);
            xotakerArr.push(norXotaker1);
            matrix[norVandak1[1]][norVandak1[0]] = 2;
            this.mahxot = 0;
        }
    }
    mahanal() {

        for (var i in xotakerArr) {
            if (xotakerArr[i].energy <= 0) {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);

            }
        }
    }
}

class Gishatich extends LivingCreature{
    constructor(x, y, energy) {
        super(x,y);
        this.energy = energy;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    // yntrelVandak(ch) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == ch) {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }

    sharjvel() {
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak3 = random(this.yntrelVandak(1));

        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 3;
            this.energy--;




        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;



        }
    }


    utel() {
        this.stanalNorKordinatner();

        var norVandak3 = random(this.yntrelVandak(2));


        if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;


            for (var i in xotakerArr) {
                if (norVandak3[1] == xotakerArr[i].y && norVandak3[0] == xotakerArr[i].x) {
                    this.energy = 5;

                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }


    }
    mahanal() {
        for (var i in gishatichArr) {
            if (gishatichArr[i].energy <= 0) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
            }
        }
    }
}
class gishatich1 {
    constructor(x, y, energy) {
        this.x = x;
        this.y = y;


    }
    NorKordinatner() {



        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {

        this.NorKordinatner();
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak3 = random(this.yntrelVandak(1));





        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 4;
        }
        if (norVandak3) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 4;
        }
    }

    utel() {


        this.NorKordinatner();
        var norVandak2 = random(this.yntrelVandak(3));
        var norVandak1 = random(this.yntrelVandak(2));
        var norVandak3 = random(this.yntrelVandak(1));
        var norVandak4 = random(this.yntrelVandak(5));

        if (norVandak4) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak4[1];
            this.x = norVandak4[0];
            matrix[this.y][this.x] = 4;

            for (var i in anhetacoxArr) {
                if (norVandak4[1] == anhetacoxArr[i].y && norVandak4[0] == anhetacoxArr[i].x) {
                    anhetacoxArr.splice(i, 1);

                }

            }
        }
        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 4;

            for (var i in gishatichArr) {
                if (norVandak2[1] == gishatichArr[i].y && norVandak2[0] == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                }

            }
        }
        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 4;

            for (var i in xotakerArr) {
                if (norVandak1[1] == xotakerArr[i].y && norVandak1[0] == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);

                }



            }
        }


        else {
            this.sharjvel();
        }



    }

    mahanal() {
        for (var i in gish1Arr) {
            if (grassArr.length == 0) {
                matrix[this.y][this.x] = 0;
                gish1Arr.splice(i, 1);

            }
        }
    }





}
class Anhetacox {
    constructor(x, y, energy) {
        this.x = x;
        this.y = y;
        this.anhetacum = false;



    }
    NorKordinatner() {


        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    //  yntrelVandak(ch) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == ch) {
    //                 found.push(this.directions[i]);
    //             }
    //         }
    //     }
    //     return found;
    // }

    sharjvel() {

        this.NorKordinatner();
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak1 = random(this.yntrelVandak(4));
        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 5;
            if (norVandak1) {
                this.anhetanal();
            }
        }
    }



    anhetanal() {

        matrix[this.y][this.x] = 0;
        var norVandak1 = random(this.yntrelVandak(4));
    }




}
