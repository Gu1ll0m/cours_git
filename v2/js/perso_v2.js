//================================================================================================================================================//
//============================================================= Objet Perso ======================================================================//
//================================================================================================================================================//

function perso() {
  // lance la fct mvt() si index n'est ni un bloc ni un perso
  this.deplace = function(old_index, index, mvt) {
    console.log(old_index, index);
    if (tab_position[index] == 1) { // bloc
      console.log("Vous faîtes face à un bloc");
    } else if ((tab_position[index] == 0) || (tab_position[index] == 2) || (tab_position[index] == 4)) {
      mvt(); // donc on se déplace
      if (tab_position[index] == 2) { // arme
        console.log("Vous vous équipez d'une arme"); // ici fonction equipe()
        $carte.append("<div class='casevideClass' style='left:" + (index % 10) * 100 + "px; top:" + Math.floor(index / 10) * 100 + "px ;position: absolute;'></div>");

      }
      if ((tab_position[index] == 3) || (tab_position[index] == 4)) { // personnage
        console.log("FIGHT"); // ici fonction combat()
      }
      tab_position[index] = 3; // maj index de la case suivante (contient maintenant le perso)
      tab_position[old_index] = 0; // maj index de la case precedente (contient maintenant une case vide)
      game.verifieCompteur();
    }
  }
}



var personnage = {
  // Initialise le personnage
  init: function(nom, sante) {
    this.nom = nom;
    this.sante = sante;
    if (degat) {
      this.degat = degat;
    } // si le personnage est équipé d'une arme
  },

  // Renvoie la description du personnage
  decrire: function() {
    if (this.degat) {
      return (this.nom + " a " + this.sante + " points de vie et inflige " + this.degat + " points de dégât avec son arme");
    } // si 4 variables
    else return (this.nom + " a " + this.sante + " points de vie"); // si 3 variables
  },
}


var perso1 = Object.create(personnage);
perso1.init("Alien", 100);

var perso2 = Object.create(personnage);
perso2.init("Predator", 100);

console.log(perso1.decrire());
console.log(perso2.decrire());


// attaque un personnage cible
function attaquer(cible) {
  if (this.sante > 0) {
    var degats = this.degat;
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
