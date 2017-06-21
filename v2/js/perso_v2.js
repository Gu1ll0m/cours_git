//================================================================================================================================================//
//============================================================= Objet Perso ======================================================================//
//================================================================================================================================================//

function Perso() {

  // Initialise les personnages avec les paramètres nom santé dégât et elm qui correspond à l' élément html.
  this.initPerso = function(nom, sante, degat, elm) {
    this.nom = nom;
    this.sante = sante;
    this.degat = degat;
    this.elm = elm;
  }

  // Renvoie la description des personnages
  this.decrirePerso = function() {
    var description = this.nom + "possède" + this.sante + "et fait " + this.degat + " points de dégâts avec son arme";
    return description;
  }

  // lance la fct mvt() si index n'est ni un bloc ni un perso
  this.deplace = function(old_index, index, mvt) {
    var self = this;
    //console.log(self); // Pour test
    if (tab_position[index] == 1) { // bloc
      alert("Vous faîtes face à un bloc");
    } else if ((tab_position[index] == 0) || (tab_position[index] == 2) || (tab_position[index] == 4)) {


      if (tab_position[index] == 2) { // arme
        alert("Vous vous équipez d'une arme"); // ici fonction equipe()
        $carte.append("<div class='casevideClass' style='left:" + (index % 10) * 100 + "px; top:" + Math.floor(index / 10) * 100 + "px ;position: absolute;'></div>"); // on remplace la case de l'arme par une case vide
        Arme();

        if (mvt == "gauche") { // déplacement
          self.elm.css('left', parseInt(self.elm.css('left')) - 100);
        }

        else if (mvt == "droite") {
          self.elm.css('left', parseInt(self.elm.css('left')) + 100);
        }

        else if (mvt == "haut") {
          self.elm.css('top', parseInt(self.elm.css('top')) - 100);
        }

        else if (mvt == "bas") {
          self.elm.css('top', parseInt(self.elm.css('top')) + 100);
        }
        console.log(this.degat); // pour test
      }

      else if ((tab_position[index] == 3) || (tab_position[index] == 4)) { // personnage
        alert("FIGHT"); // ici fonction fight() fight.js
        fight();
      }

      else {
        if (mvt == "gauche") {
          self.elm.css('left', parseInt(self.elm.css('left')) - 100);
        }

        else if (mvt == "droite") {
          self.elm.css('left', parseInt(self.elm.css('left')) + 100);
        }

        else if (mvt == "haut") {
          self.elm.css('top', parseInt(self.elm.css('top')) - 100);
        }

        else if (mvt == "bas") {
          self.elm.css('top', parseInt(self.elm.css('top')) + 100);
        }
        console.log(this.degat); // pour test
      }

      if (self.nom == "Predator") tab_position[index] = 4; // maj index de la case suivante (contient maintenant le perso)
      if (self.nom == "Alien") tab_position[index] = 3; // maj index de la case suivante (contient maintenant le perso)
      tab_position[old_index] = 0; // maj index de la case precedente (contient maintenant une case vide)
      game.verifieCompteur();
    }
  }

}
