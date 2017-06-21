//================================================================================================================================================//
//============================================================== Fonctions attaque ==============================================================//
//================================================================================================================================================//

// attaque un personnage cible
function fight() {

  // déclaration des perso
  this.perso1;
  this.perso2;
  this.perso_actuel;
  this.cible = function() {
    if (this.perso_actuel = this.perso1); {
      this.cible = this.perso2;
      return this.cible;
    }
    else (this.perso_actuel = this.perso2); {
      this.cible = this.perso1;
      return this.cible;
    }
    console.log(this.cible); // pour tests
  }


  var choix; // variable choix => 2 choix possibles = attaquer ou défendre
  while (choix !== "0") {
    alert("Presser 1 pour attaquer");
    alert("Presser 2 pour vous défendre");

    //TODO : insérer une boucle tant que this.cible.sante > o  

    var choix = prompt("Choisissez une option : ");

    if (choix = 1) {attaquer();}
    if (choix = 2) {defendre();}


    // déroulement de l' attaque
    function attaquer() {

      if (this.cible.sante > 0) { // la cible à des points de vie
        var degats = this.perso_actuel.degat;
        alert(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
        this.cible.sante = this.cible.sante - degats; // les points de vie de la cible sont diminué de la valeur des dégâts de l'arme
        if (this.cible.sante > 0) {
          alert(this.cible.nom + " a encore " + this.cible.sante + " points de vie");
        }
        else {
          this.cible.sante = 0; // si la cible n'a plus de point de vie
          alert(cible.nom + " est mort !");
        }
      }
      else { // permet de recommencer la partie
        alert(this.nom + " ne peut pas attaquer : il est mort! La partie est terminé.");
        alert("Pour rejouer appuyer sur F5");
      }
    };

    // fonctionnement de la défense : division des dégats subies par 2
    function defendre() {
      var def = (this.degat / 2);
      return def;
    }

    break;
  };

}
