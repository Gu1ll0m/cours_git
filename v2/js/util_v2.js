//================================================================================================================================================//
//========================================================= Création des variables globales ======================================================//
//================================================================================================================================================//

var tab_position = [];
var $carte = $("#map");
var perso1, perso2;
var perso_actuel;
var ligne, colonne;
var longueur = 10;

//================================================================================================================================================//
//============================================================== Fonctions Globales ==============================================================//
//================================================================================================================================================//

// fonction qui retourne un entier aléatoire entre 1 et max
function nb_aleat( max ) {
    return Math.floor((Math.random() * max) + 1);
}

// returne l'index du perso passé en argument
function getIndexPerso( perso ) {
    ligne = parseInt(perso.css('top')) / 100; // position en x
    colonne = parseInt(perso.css('left')) / 100; // position en Y
    return getIndex(ligne, colonne, longueur);
}

function getIndex( laLigne, laColonne, laLongueur ) {
    laLongueur = longueur;
    return ( laLigne * laLongueur + laColonne );
}

//================================================================================================================================================//
//============================================================== Fonctions attaque ==============================================================//
//================================================================================================================================================//

// attaque un personnage cible
function attaquer(cible) {
  if (this.sante > 0) {
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
    alert(this.nom + " ne peut pas attaquer : il est mort...");
  }
};
