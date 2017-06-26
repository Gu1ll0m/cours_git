//================================================================================================================================================//
//============================================================= Objet Perso ======================================================================//
//================================================================================================================================================//

function Perso() {

  // initialise les personnages avec les paramètres nom santé dégât et elm qui correspond à l' élément html.
  this.initPerso = function(nom, sante, degat, elm) {
    this.nom = nom;
    this.sante = sante;
    this.degat = degat;
    this.elm = elm;
    this.posture = 0; // 0 correspond à la posture d' attaque, 1 à la posture de défense.
  }

  // renvoie la description des personnages
  this.decrirePerso = function() {
    var description = this.nom + "possède" + this.sante + "et fait " + this.degat + " points de dégâts avec son arme";
    return description;
  }

  //this.armeActuelle;

  // lance la fct mvt() si index n'est ni un bloc ni un perso
  this.deplace = function(old_index, index, mvt, map) {
    var self = this;
    //console.log(self); // retourne la valeur de self
    if (tab_position[index] == 1) { // 1 est l' id des blocs
      alert("Vous faîtes face à un bloc");
    } 
    else if ((tab_position[index] == 0) || (tab_position[index] == "arme1Class") || (tab_position[index] == "arme2Class") || (tab_position[index] == "arme3Class") || (tab_position[index] == "arme4Class") || (tab_position[index] == 3) || (tab_position[index] == 4)) { 
    // si on est face à une case vide, une arme, Alien ou Predator

      if ((tab_position[index] == "arme1Class") || (tab_position[index] == "arme2Class") || (tab_position[index] == "arme3Class") || (tab_position[index] == "arme4Class")) { // id des armes
        this.degat=map.arsenal[tab_position[index]].degat;
        alert("Vous vous équipez d'une arme avec "+this.degat+" de dégâts supplémentaires");
        $carte.append("<div class='casevideClass' style='left:" + (index % 10) * 100 + "px; top:" + Math.floor(index / 10) * 100 + "px ;position: absolute;'></div>"); // on remplace la case de l'arme par une case vide
        
        if (mvt == "gauche") { // déplacement à gauche
          self.elm.css('left', parseInt(self.elm.css('left')) - 100);
        }

        else if (mvt == "droite") { // déplacement à droite
          self.elm.css('left', parseInt(self.elm.css('left')) + 100);
        }

        else if (mvt == "haut") { // déplacement en haut
          self.elm.css('top', parseInt(self.elm.css('top')) - 100);
        }

        else if (mvt == "bas") { // déplacement en bas
          self.elm.css('top', parseInt(self.elm.css('top')) + 100);
        }
        console.log(this.degat); // vérifie que les dégâts sont bien équivalent à la valeur de l'arme équipé
      }


      else if ((tab_position[index] == 3) || (tab_position[index] == 4)) { // "Alien" et 4 sont les id des personnages
        alert("FIGHT"); 
        fight(map.getPerso1(),map.getPerso2(),self); // ici fonction fight(), self = this.perso_actuel (ligne 25)
      }


      else { // si on se dirige vers une case vide
        if (mvt == "gauche") { // déplacement à gauche
          self.elm.css('left', parseInt(self.elm.css('left')) - 100);
        }

        else if (mvt == "droite") { // déplacement à droite
          self.elm.css('left', parseInt(self.elm.css('left')) + 100);
        }

        else if (mvt == "haut") { // déplacement en haut
          self.elm.css('top', parseInt(self.elm.css('top')) - 100);
        }

        else if (mvt == "bas") { // déplacement en bas
          self.elm.css('top', parseInt(self.elm.css('top')) + 100);
        }
        //console.log(this.degat); // retourne la valeur des dégats.
      }


      if (self.nom == "Alien") tab_position[index] = 3; // maj index de la case suivante (contient maintenant le perso)      
      if (self.nom == "Predator") tab_position[index] = 4; // maj index de la case suivante (contient maintenant le perso)
      tab_position[old_index] = 0; // maj index de la case precedente (contient maintenant une case vide)
      game.verifieCompteur();
    }
  }

}
