//================================================================================================================================================//
//============================================================= Objet Perso ======================================================================//
//================================================================================================================================================//

var Perso = {
  // Initialise les personnages
  initPerso: function(nom, sante, degat, ) {
    this.nom = nom;
    this.sante = sante;
    this.degat = degat;
  }

  // Renvoie la description des personnages
  decrirePerso: function () {
    var description = this.nom + " fait " + this.degat + " points de dégâts";
    return description;
  }

  //init Alien
  var perso1 = new(Perso);
  perso1.initPerso("Alien", 100, 10, []);

  //init Prédator
  var perso2 = new(Perso);
  perso2.initPerso("Prédator", 100, 10, []);

  function perso()
  // lance la fct mvt() si index n'est ni un bloc ni un perso
  this.deplace = function(old_index, index, mvt) {
    console.log(old_index, index);
    if (tab_position[index] == 1) { // bloc
      alert("Vous faîtes face à un bloc");
    } else if ((tab_position[index] == 0) || (tab_position[index] == 2) || (tab_position[index] == 4)) {
      mvt(); // donc on se déplace
      if (tab_position[index] == 2) { // arme
        alert("Vous vous équipez d'une arme"); // ici fonction equipe()
        $carte.append("<div class='casevideClass' style='left:" + (index % 10) * 100 + "px; top:" + Math.floor(index / 10) * 100 + "px ;position: absolute;'></div>");

      }
      if ((tab_position[index] == 3) || (tab_position[index] == 4)) { // personnage
        alert("FIGHT"); // ici fonction combat()
      }
      tab_position[index] = 3; // maj index de la case suivante (contient maintenant le perso)
      tab_position[old_index] = 0; // maj index de la case precedente (contient maintenant une case vide)
      game.verifieCompteur();
    }
  }
  console.log(perso1.decrirePerso);
  console.log(perso2.decrirePerso);

}
