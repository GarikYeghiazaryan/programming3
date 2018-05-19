var LivingCreature = require("./class.parent");
module.exports =  class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
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

    bazmanal() {
        this.NorKordinatner();
        this.yntrelVandak();
        this.multiply++;
        var norVandak = this.choose(this.yntrelVandak(0));

        if (norVandak && this.multiply >= 2) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}