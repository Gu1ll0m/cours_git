//================================================================================================================================================//
//============================================================= Objet Map ========================================================================//
//================================================================================================================================================//

function map(nombre_case_X, nombre_case_Y) {

    this.nombre_case_X = nombre_case_X;
    this.nombre_case_Y = nombre_case_Y;
    this.perso1_sur_la_map = false;
    this.perso2_sur_la_map = false;
    this.nb_arme_sur_la_map = 0;

    // fonction qui permet la création de la map
    this.genere_carte_aleat = function() {
        for (var i = 0; i < this.nombre_case_X; i++) {
            for (var j = 0; j < this.nombre_case_Y; j++) {
                var random = nb_aleat(20); // fonction nb_aleat avec en paramètre 20 pour que le rendu soit plus aléatoire
                //TODO : gestion cas particulier si jamais random == 1
                if ( random == 1 && this.perso1_sur_la_map == false ) { // si random est égal à 1 et que le perso1 n'est pas encore sur la map
                    $carte.append("<img src='../img/perso1_alien.png' class='persoClass' id='perso1' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>");
                    $carte.append("<div class='casevideClass'></div>");
                    this.perso1_sur_la_map = true;
                    tab_position.push(3); // id du perso1
                    perso1 = $("#perso1");
                } else if ( random == 12 && this.perso2_sur_la_map == false ) { // si random est égal à 12 et que le perso2 n'est pas encore sur la map
                    $carte.append("<img src='../img/perso2_predator.png' class='persoClass' id='perso2' style='left:" + 100 * j + "px; top:" + 100 * i + "px'>");
                    $carte.append("<div class='casevideClass'></div>");
                    this.perso2_sur_la_map = true;
                    tab_position.push(4); // id du perso2
                    perso2 = $("#perso2");
                } else if ( random == 3 && this.nb_arme_sur_la_map < 1 ) { // si random est égal à 3 et que l' arme1 n'est pas encore sur la map
                    $carte.append("<div class='arme1Class'></div>");
                    this.nb_arme_sur_la_map++;
                    tab_position.push(2); // id de l'arme 1
                } else if ( random == 3 && this.nb_arme_sur_la_map < 2 ) { // si random est égal à 3 et que l' arme2 n'est pas encore sur la map
                    $carte.append("<div class='arme2Class'></div>");
                    this.nb_arme_sur_la_map++;
                    tab_position.push(2); // id de l'arme 1
                } else if ( random == 3 && this.nb_arme_sur_la_map < 3 ) { // si random est égal à 3 et que l' arme3 n'est pas encore sur la map
                    $carte.append("<div class='arme3Class'></div>");
                    this.nb_arme_sur_la_map++;
                    tab_position.push(2); // id de l'arme 1
                } else if ( random == 3 && this.nb_arme_sur_la_map < 4 ) { // si random est égal à 3 et que l' arme4 n'est pas encore sur la map
                    $carte.append("<div class='arme4Class'></div>");
                    this.nb_arme_sur_la_map++;
                    tab_position.push(2); // id de l'arme 1
                } else if (( random == 7 || random == 13 || random == 9 || random == 15)) { // si random est égal à 7 ou si random est égal à 13 on insert un bloc
                    $carte.append("<div class='blockClass'></div>");
                    tab_position.push(1); // id du bloc
                } else { // pour tout autre valeur de random on insert systématiquement une case vide
                    $carte.append("<div class='casevideClass'></div>");
                    tab_position.push(0); // id de la case vide
                }
                //console.log("case" + " " + i + j);
            }
        }
    };

}
