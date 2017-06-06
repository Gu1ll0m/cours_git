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
