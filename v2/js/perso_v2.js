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



function Personnage (nom, sante, degat) {
  this.nom = nom;
  this.sante = sante;
  this.degat = degat;
}

// On crée des variables qui vont contenir une instance de l'objet Person :
var perso1 = new Personnage('Alien', 100, 10, []);
var perso2 = new Personnage('Predator', 100, 10, []);
