var LivingCreature = require("./class.parent");
module.exports =  class gishatich1 extends LivingCreature {
    constructor(x, y, energy) {
        super(x,y);


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
  
    sharjvel() {

        this.NorKordinatner();
        var norVandak2 = this.choose(this.yntrelVandak(0));
        var norVandak3 = this.choose(this.yntrelVandak(1));





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
        var norVandak2 = this.choose(this.yntrelVandak(3));
        var norVandak1 = this.choose(this.yntrelVandak(2));
        var norVandak3 = this.choose(this.yntrelVandak(1));
        var norVandak4 = this.choose(this.yntrelVandak(5));

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