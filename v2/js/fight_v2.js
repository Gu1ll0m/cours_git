//================================================================================================================================================//
//============================================================== Fonctions attaque ===============================================================//
//================================================================================================================================================//

// attaque un personnage cible
function fight(perso1, perso2, perso_actuel) {

  // variable choix => 2 choix possibles = attaquer ou défendre
  var choix;

  while (this.cible.sante > 0 && perso_actuel.sante > 0) { // boucle qui test les points de vie des persos 1 et 2

  // déclaration des perso
  if (perso_actuel == perso1) {
    this.cible = perso2;
  } else if (perso_actuel == perso2) {
    this.cible = perso1;
  }

    alert("Presser 1 pour attaquer");
    alert("Presser 2 pour vous défendre");

    var choix = prompt("Choisissez une option : ");

    console.log(perso_actuel);
    console.log("Alien PV " + perso1.sante + " " + "Predator PV "+ perso2.sante)


    // déroulement de l' attaque
    function attaquer() {

      // posture de la cible
      if (perso_actuel.posture == 1) {
        this.cible.degat = this.cible.degat * 2;
        perso_actuel.posture = 0;
      }

      if (this.cible.sante > 0) { // la cible à des points de vie
        alert(perso_actuel.nom + " attaque " + this.cible.nom + " et lui fait " + perso_actuel.degat + " points de dégâts");
        this.cible.sante = this.cible.sante - perso_actuel.degat; // les points de vie de la cible sont diminué de la valeur des dégâts de l'arme
        if (this.cible.sante > 0) {
          // gérer ici le changement de perso
          alert(this.cible.nom + " a encore " + this.cible.sante + " points de vie");
        } else {
          this.cible.sante = 0; // si la cible n'a plus de point de vie
          alert(this.cible.nom + " est mort !");
        }
      }
      if (this.cible.sante <= 0) { // permet de recommencer la partie
        alert(this.cible.nom + " ne peut pas attaquer : il est mort! La partie est terminé.");
        alert("Pour rejouer appuyer sur F5");
      }
    };


    // déroulement de la défense
    function defendre() {
      if (perso_actuel.posture == 0) { // si notre perso est en posture d' attaque
        perso_actuel.posture = 1; // on la passe en posture de défense
        this.cible.degat = this.cible.degat / 2; // les dégats de la cible sont divisé par 2
        //console.log(this.cible.degat);
      }
    };

  if (choix == 1) {
    attaquer();
  }
  if (choix == 2) {
    defendre();
  }
// intervertir les 2 variables
  tmp=perso_actuel; // dans var tmp on met perso_actuel
  perso_actuel=this.cible; // dans perso_actuel on met this.cible
  this.cible=tmp; // on met this.cible on met tmp
  
  };

}
