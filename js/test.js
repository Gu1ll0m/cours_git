//création des variables

var tabPosition = [];
var perso1_sur_la_map = false;
var perso2_sur_la_map = false;
var nb_arme_sur_la_map = 0;
var nombreCaseX = 10;
var nombreCaseY = 100;



//================================================================================================================================================//

// fonction qui retourne un entier aléatoire entre 1 et max
function generate_random(max) {
    return Math.floor((Math.random() * max) + 1);
}

//================================================================================================================================================//

// fonction qui permet la création de la map
function generate_map(max) {
    for (var i = 0; i < nombreCaseX; i++) {
        for (var j = 0; j < nombreCaseY; j++) {
            //$('#map').append("<img src='../img/perso1.png' class='perso' id='perso1' style='left:" + 82 * j + "px; top:" + 82 * i + "px'>");
            //for (var i = 0; i < max; i++) {
            var map = Object.create(Map); // création de la map
            var random = generate_random(20); // fonction generate_random avec en paramètre 20 pour que le rendu soit plus aléatoire
            //TODO : gestion cas particulier si jamais random == 1
            if (random == 1 && perso1_sur_la_map == false) { // si random est égal à 1 et que le perso1 n'est pas encore sur la map
                $("#map").append("<img src='../img/perso1.png' class='persoClass' id='perso1' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>");
                perso1_sur_la_map = true;
                tabPosition.push(3); // id du perso1
            } else if (random == 12 && perso2_sur_la_map == false) { // si random est égal à 12 et que le perso2 n'est pas encore sur la map
                $("#map").append("<img src='../img/perso2.png' class='persoClass' id='perso2' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>");
                perso2_sur_la_map = true;
                tabPosition.push(4); // id du perso2
            } else if (random == 3 && nb_arme_sur_la_map < 1) { // si random est égal à 3 et que l' arme1 n'est pas encore sur la map
                $("#map").append("<img src='../img/arme1.png' class='armeClass' id='arme1'>");
                nb_arme_sur_la_map++;
                tabPosition.push(2); // id de l'arme 1
            } else if (random == 3 && nb_arme_sur_la_map < 2) { // si random est égal à 3 et que l' arme2 n'est pas encore sur la map
                $("#map").append("<img src='../img/arme2.png' class='armeClass' id='arme2'>");
                nb_arme_sur_la_map++;
                tabPosition.push(2); // id de l'arme 1
            } else if (random == 3 && nb_arme_sur_la_map < 3) { // si random est égal à 3 et que l' arme3 n'est pas encore sur la map
                $("#map").append("<img src='../img/arme3.png' class='armeClass' id='arme3'>");
                nb_arme_sur_la_map++;
                tabPosition.push(2); // id de l'arme 1
            } else if (random == 3 && nb_arme_sur_la_map < 4) { // si random est égal à 3 et que l' arme4 n'est pas encore sur la map
                $("#map").append("<img src='../img/arme4.png' class='armeClass' id='arme4'>");
                nb_arme_sur_la_map++;
                tabPosition.push(2); // id de l'arme 1
            } else if ((random == 7 || random == 13)) { // si random est égal à 7 ou si random est égal à 13 on insert un bloc
                $("#map").append("<img src='../img/bloc.png' class='blocClass' id='bloc'>");
                tabPosition.push(1); // id du bloc
            } else { // pour tout autre valeur de random on insert systématiquement une case vide
                $("#map").append("<img src='../img/casevide.png' class='casevideClass' id='casevide'>");
                tabPosition.push(0); // id de la case vide
            };

            console.log(j);
            tabPosition[j] = map; // incrémente le tableau
        }
        return tabPosition;
    }
}


generate_map(100);


//================================================================================================================================================//

//fonction qui permet de gérer les déplacements des personnages
function deplace() {

    var ligne = parseInt($('#persoClass').css('top')) / 30;
    var colonne = parseInt($('#persoClass').css('left')) / 30;
    var longueur = 9;
    var index = ligne * longueur + colonne;


    $(document).keydown(function(e) {
        console.log(e.which);
        if (e.which == 39) { // Vers la droite
            ligne--;
            index = ligne * colonne + longueur; // l'index de la case suivant
            //if (mapping[index] == 0) { // la case suivante est une case vide
            $('#persoClass').css('left', colonne + 100); // donc on se déplace
            //}
        }

        if (e.which == 37) { // Vers la gauche
            ligne--;
            index = ligne * colonne + longueur; // l'index de la case suivant
            //if (mapping[index] == 0) { // la case suivante est une case vide
            $('#persoClass').css('left', colonne - 100); // donc on se déplace
            //}
        }

        if (e.which == 40) { // Vers le bas
            ligne--;
            index = ligne * longueur + colonne; // l'index de la case suivant
            //if (mapping[index] == 0) { // la case suivante est une case vide
            $('#persoClass').css('top', ligne + 100); // donc on se déplace
            //}
        }

        if (e.which == 38) { // Vers le haut
            ligne--;
            index = ligne * longueur + colonne; // l'index de la case suivant
            //if (mapping[index] == 0) { // la case suivante est une case vide
            $('#persoClass').css('top', ligne - 100); // donc on se déplace
            //}
        }
    })
}

deplace();
