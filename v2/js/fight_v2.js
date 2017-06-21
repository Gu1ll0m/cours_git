//================================================================================================================================================//
//============================================================== Fonctions attaque ==============================================================//
//================================================================================================================================================//

// attaque un personnage cible
// TODO : définir cible
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
    if (this.perso_actuel = this.perso2); {
      this.cible = this.perso1;
      return this.cible;
    }
    console.log(this.cible); // pour tests
  }


  var choix; // variable choix => 5 choix possibles, générer de 1 à 5 citations
  while (choix !== "0") {
    alert("Presser 1 pour attaquer");
    alert("Presser 2 pour vous défendre");

    var choix = prompt("Choisissez une option : ");

    if (choix = 1) {attaquer();}
    if (choix = 2) {defendre();}


    function attaquer() {

      if (this.cible.sante > 0) {
        var degats = this.degat;
        alert(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
        cible.sante = cible.sante - degats;
        if (cible.sante > 0) {
          alert(cible.nom + " a encore " + cible.sante + " points de vie");
        }
        else {
          cible.sante = 0;
          alert(cible.nom + " est mort !");
        }
      }
      else {
        alert(this.nom + " ne peut pas attaquer : il est mort! La partie est terminé.");
        alert("Pour rejouer appuyer sur F5");
      }
    };

    function defendre() {
      var def = (this.degat / 2);
      return def;
    }
    break;
  };

}
