var arme = {
    // Initialise les armes
    init: function(nom, degat) {
        this.nom = nom;
        this.degat = degat;
    },

    // Renvoie la description de l'arme
    decrire: function() {
        var description = this.nom + " fait " + this.degat + " points de dégâts";
        return description;
    }
};

var arme1 = Object.create(arme);
arme1.init("lanceur de bisoux intergalactique", 10);

var arme2 = Object.create(arme);
arme2.init("lanceur de cailloux intergalactique", 25);

var arme3 = Object.create(arme);
arme3.init("patator intergalactique", 50);

var arme4 = Object.create(arme);
arme4.init("headshotter intergalactique", 100);

console.log(arme1.decrire());
console.log(arme2.decrire());
console.log(arme3.decrire());
console.log(arme4.decrire());
