var personnage = {
    // Initialise le personnage
    init: function(nom, sante) {
        this.nom = nom;
        this.sante = sante;
    },

    // Renvoie la description du personnage
    decrire: function() {
        var description = this.nom + " a " + this.sante + " points de vie";
        return description;
    }
};

var perso1 = Object.create(personnage);
perso1.init("Alien", 100);

var perso2 = Object.create(personnage);
perso2.init("Predator", 100);

console.log(perso1.decrire());
console.log(perso2.decrire());


// attaque un personnage cible
function attaquer(cible) {
    if (this.sante > 0) {
        var degats = this.force;
        console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
        cible.sante = cible.sante - degats;
        if (cible.sante > 0) {
            console.log(cible.nom + " a encore " + cible.sante + " points de vie");
        } else {
            cible.sante = 0;
            console.log(cible.nom + " est mort !");
        }
    } else {
        console.log(this.nom + " ne peut pas attaquer : il est mort...");
    }
};
