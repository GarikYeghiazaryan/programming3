class Anhetacox extends LivingCreature {
    constructor(x, y, energy) {
        super(x, y);
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
