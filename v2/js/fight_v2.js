//================================================================================================================================================//
//============================================================== Fonctions attaque ==============================================================//
//================================================================================================================================================//

// défini la cible en fonction de perso_actuel
function cible() {
  if (this.perso_actuel = this.perso1); {
    this.cible = this.perso2;
    return this.cible;
  }
  if (this.perso_actuel = this.perso2); {
    this.cible = this.perso1;
    return this.cible;
  }
  console.log(this.cible); // pour testS
}




// attaque un personnage cible
// TODO : définir cible
function fight(cible) {

  // déclaration des perso
  this.perso_actuel;
  this.cible = cible();

  if (this.cible.sante > 0) {
    var degats = this.degat;
    alert(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
    cible.sante = cible.sante - degats;
    if (cible.sante > 0) {
      alert(cible.nom + " a encore " + cible.sante + " points de vie");
    } else {
      cible.sante = 0;
      alert(cible.nom + " est mort !");
    }
  } else {
    alert(this.nom + " ne peut pas attaquer : il est mort! La partie est terminé.");
    alert("Pour rejouer appuyer sur F5");
  }
};
