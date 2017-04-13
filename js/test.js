//création des variables

var tabPosition = [];
var perso1_sur_la_map = false;
var perso2_sur_la_map = false;
var nb_arme_sur_la_map = 0;
var nombreCaseX = 10;
var nombreCaseY = 10;



//================================================================================================================================================//

// fonction qui retourne un entier aléatoire entre 1 et max
function generate_random(max) {
    return Math.floor((Math.random() * max) + 1);
}

//================================================================================================================================================//

// fonction qui permet la création de la map
function generate_map() {
    for (var i = 0; i < nombreCaseX; i++) {
        for (var j = 0; j < nombreCaseY; j++) {
            var map = Object.create(Map); // création de la map
            var random = generate_random(20); // fonction generate_random avec en paramètre 20 pour que le rendu soit plus aléatoire
            //TODO : gestion cas particulier si jamais random == 1
            if (random == 1 && perso1_sur_la_map == false) { // si random est égal à 1 et que le perso1 n'est pas encore sur la map
                $("#map").append("<img src='../img/perso1.png' class='persoClass' id='perso1' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>");
                $("#map").append("<img src='../img/casevide.png' class='casevideClass' id='casevide'>");
                perso1_sur_la_map = true;
                tabPosition.push(3); // id du perso1
            } else if (random == 12 && perso2_sur_la_map == false) { // si random est égal à 12 et que le perso2 n'est pas encore sur la map
                $("#map").append("<img src='../img/perso2.png' class='persoClass' id='perso2' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>");
                $("#map").append("<img src='../img/casevide.png' class='casevideClass' id='casevide'>");
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
            } else if ((random == 7 || random == 13 || random == 9 || random == 15)) { // si random est égal à 7 ou si random est égal à 13 on insert un bloc
                $("#map").append("<img src='../img/bloc.png' class='blocClass' id='bloc'>");
                tabPosition.push(1); // id du bloc
            } else { // pour tout autre valeur de random on insert systématiquement une case vide
                $("#map").append("<img src='../img/casevide.png' class='casevideClass' id='casevide'>");
                tabPosition.push(0); // id de la case vide
            }
            console.log("case" + " " + i + j);
        }
    }
}


generate_map(nombreCaseX * nombreCaseY);


//================================================================================================================================================//

//fonction qui permet de gérer les déplacements du personnage 1
function deplace() {


    var ligne = parseInt($('#perso1').css('top')) / 100; // position en x
    var colonne = parseInt($('#perso1').css('left')) / 100; // position en Y
    var longueur = 10; //10 cases par lignes
    var index = ligne * longueur + colonne; // position actuelle du perso avant déplacement

    $(document).keydown(function(e) { //ou est-ce que se trouve le perso

        if (e.which == 37) { // Vers la gauche
            console.log("gauche");
            colonne--; // on se dirige vers la colonne précedante
            index = ligne * colonne + longueur; // l'index de la case suivant
            console.log("l' index de la case est" + " " + index);
            if (tabPosition[index] == 1) { // bloc
                console.log("Vous faîtes face à un bloc");
            } else if ((tabPosition[index] == 0) || (tabPosition[index] == 2) || (tabPosition[index] == 4)) {
                $('#perso1').css('left', parseInt($('#perso1').css('left')) - 100); // donc on se déplace
                if (tabPosition[index] == 2) { // arme
                    console.log("Vous vous équipez d'une arme"); // ici fonction equipe()
                }
                if ((tabPosition[index] == 3) || (tabPosition[index] == 4)) { // personnage
                    console.log("FIGHT"); // ici fonction combat()
                }
            }
        }

        if (e.which == 38) { // Vers le haut
            console.log("haut");
            ligne--; // on se dirige vers la ligne précédante
            index = ligne * longueur + colonne; // l'index de la case suivant
            console.log("l' index de la case est" + " " + index);
            if (tabPosition[index] == 1) {
                console.log("Vous faîtes face à un bloc");
            } else if ((tabPosition[index] == 0) || (tabPosition[index] == 2) || (tabPosition[index] == 4)) {
                $('#perso1').css('top', parseInt($('#perso1').css('top')) - 100); // donc on se déplace
                if (tabPosition[index] == 2) {
                    console.log("Vous vous équipez d'une arme"); // ici fonction equipe()
                }
                if ((tabPosition[index] == 3) || (tabPosition[index] == 4)) { // personnage
                    console.log("FIGHT"); // ici fonction combat()
                }
            }
        }

        if (e.which == 39) { // Vers la droite
            console.log("droite");
            colonne++; // on se dirige vers la colonne suivant
            index = ligne * colonne + longueur; // l'index de la case suivant
            console.log("l' index de la case est" + " " + index);
            if (tabPosition[index] == 1) {
                console.log("Vous faîtes face à un bloc");
            } else if ((tabPosition[index] == 0) || (tabPosition[index] == 2) || (tabPosition[index] == 4)) {
                $('#perso1').css('left', parseInt($('#perso1').css('left')) + 100); // donc on se déplace
                if (tabPosition[index] == 2) {
                    console.log("Vous vous équipez d'une arme"); // ici fonction equipe()
                }
                if ((tabPosition[index] == 3) || (tabPosition[index] == 4)) { // personnage
                    console.log("FIGHT"); // ici fonction combat()
                }
            }
        }

        if (e.which == 40) { // Vers le bas
            console.log("bas");
            ligne++; // on se dirige vers la ligne suivante
            index = ligne * longueur + colonne; // l'index de la case suivant
            console.log("l' index de la case est" + " " + index);
            if (tabPosition[index] == 1) {
                console.log("Vous faîtes face à un bloc");
            } else if ((tabPosition[index] == 0) || (tabPosition[index] == 2) || (tabPosition[index] == 4)) {
                $('#perso1').css('top', parseInt($('#perso1').css('top')) + 100); // donc on se déplace
                if (tabPosition[index] == 2) {
                    console.log("Vous vous équipez d'une arme"); // ici fonction equipe()
                }
                if ((tabPosition[index] == 3) || (tabPosition[index] == 4)) { // personnage
                    console.log("FIGHT"); // ici fonction combat()
                }
            }
        }
    })
}

deplace();
