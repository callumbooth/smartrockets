class DNA {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < lifespan; i++) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.2);
            }
        }
    }

    // Performs a crossover with another member of the species
    crossover(partner) {
        var newgenes = [];
        // Picks random midpoint
        var mid = floor(random(this.genes.length));
        for (var i = 0; i < this.genes.length; i++) {
            // If i is greater than mid the new gene should come from this partner
            if (i > mid) {
                newgenes[i] = this.genes[i];
            }
            // If i < mid new gene should come from other partners gene's
            else {
                newgenes[i] = partner.genes[i];
            }
        }
        // Gives DNA object an array
        return new DNA(newgenes);
    }
}