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

// return l'index en fonction de la ligne, la colonne et la longeur du quadrillage
function getIndex( laLigne, laColonne, laLongueur ) {
    laLongueur = longueur;
    return ( laLigne * laLongueur + laColonne );
}


//fonction qui reagit à l'appui de touche sur le clavier et appelle la fonction déplace si besoin
function toucheEnfonce() {

    $(document).keydown(function(e) { //ou est-ce que se trouve le perso

        var old_index = getIndexPerso(perso_actuel); // position actuelle du perso avant déplacement

        if (e.which == 37) { // Vers la gauche

            colonne--; // on se dirige vers la colonne précedante

            if(colonne >= 0) {

                var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante

                // IMPORTANT on place la fonction de mouvement dans une variable pour ne pas l'executer
                var mvt = function() {
                    perso_actuel.css('left', parseInt(perso_actuel.css('left'))-100 );
                };

                // IMPORTANT on appelle la fonction deplace en lui passant toute les coordonnée et le deplacement à effectuer
                perso.deplace(old_index, next_index, mvt);
            }
        } else if (e.which == 38) { // Vers le haut
        } else if (e.which == 39) { // Vers la droite
        } else if (e.which == 40) { // Vers le bas
        } else if ( e.which == 32) { // touche espace = tir
            // shoot
        }
    });
}

// IMPORTANT Fonction qui deplace un joueur d'une position (old_index) à une nouvelle (index) en executant la fonction mvt
 function deplace( old_index, index, mvt ) {

     // Si on est face à un bloc
    if (tab_position[index] == 1) { // bloc
        console.log("Vous faîtes face à un bloc");

        // sinon on se déplace
    } else if ((tab_position[index] == 0) || (tab_position[index] == 2) || (tab_position[index] == 4)) {

        mvt(); // IMPORTANT on execute la fct de déplacement recu en paramètre

        // si on recupère une arme
        if (tab_position[index] == 2) {
            console.log("Vous vous équipez d'une arme"); // ici fonction equipe()
            // on remplace la case de l'arme par une case vide
            $carte.append("<div class='casevideClass' style='left:"+(index%10)*100+"px; top:"+Math.floor(index/10)*100+"px ;position: absolute;'></div>");
            // todo : maj de l'arme du perso + laisser l'ancienne arme par terre

        }
        //si on est face à un perso fct combat
        else if ((tab_position[index] == 3) || (tab_position[index] == 4)) { // personnage
            console.log("FIGHT"); // todo : fonction combat()
        }

        // IMPORTANT On met à jour notre tableau de position
        tab_position[index] = 3; // maj index de la case suivante (contient maintenant le perso)
        tab_position[old_index] = 0; // maj index de la case precedente (contient maintenant une case vide)

        // IMPORTANT on vérifie si on ne doit pas changer de personnage
        game.verifieCompteur();

    }
}
