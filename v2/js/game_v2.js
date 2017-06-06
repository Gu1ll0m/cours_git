//================================================================================================================================================//
//============================================================= Objet Game =======================================================================//
//================================================================================================================================================//

function game() {

    this.compteur_de_tour = 0;
    //this.map = Object.create(map);
    this.map = new map( 10, 10 );
    //this.perso = Object.create(perso);
    // todo : gérer 2 objets perso
    this.perso = new perso();

    // fonction qui lance le jeu
    this.lancementJeu = function() {
        this.map.genere_carte_aleat();
        if ( nb_aleat(2) > 1 ) {
            perso_actuel = perso1;
            alert("le joueur 1 commence");
        } else {
            perso_actuel = perso2;
            alert("le joueur 2 commence");
        }
        this.toucheEnfonce();

    };

    // fonction qui incrémente le compteur_de_tour et change de perso_actuel si > 3
    this.verifieCompteur = function() {
        this.compteur_de_tour++;
        console.log(this.compteur_de_tour);
        if ( this.compteur_de_tour >= 3 ) {
            perso_actuel == perso1 ? perso_actuel = perso2 : perso_actuel = perso1;
            this.compteur_de_tour = 0;
            alert("changement perso");
        }
    };

    //fonction qui permet qui reagit à l'appui de touche sur le clavier
    this.toucheEnfonce = function() {
        var perso = this.perso;
        var map = this.map;
        $(document).keydown(function(e) { //ou est-ce que se trouve le perso

            var old_index = getIndexPerso(perso_actuel); // position actuelle du perso avant déplacement

            if (e.which == 37) { // Vers la gauche
                colonne--; // on se dirige vers la colonne précedante
                if(colonne >= 0) {
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    var mvt = function() {
                        perso_actuel.css('left', parseInt(perso_actuel.css('left'))-100 );
                    };
                    perso.deplace(old_index, next_index, mvt);
                }
            } else if (e.which == 38) { // Vers le haut
                ligne--; // on se dirige vers la ligne précédante
                var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                var mvt = function() {
                    perso_actuel.css('top', parseInt(perso_actuel.css('top'))-100 );
                };
                perso.deplace(old_index, next_index, mvt);
            } else if (e.which == 39) { // Vers la droite
                colonne++; // on se dirige vers la colonne suivant
                if (colonne < map.nombre_case_X) {
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    var mvt = function() {
                        perso_actuel.css('left', parseInt(perso_actuel.css('left'))+100 );
                    };
                    perso.deplace(old_index, next_index, mvt);
                }
            } else if (e.which == 40) { // Vers le bas
                ligne++; // on se dirige vers la ligne suivante
                if(ligne < map.nombre_case_Y) {
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    var mvt = function() {
                        perso_actuel.css('top', parseInt(perso_actuel.css('top'))+100 );
                    };
                    perso.deplace(old_index, next_index, mvt);
                }
            } else if ( e.which == 32) { // touche espace = tir

            }
        });
    };

}

//================================================================================================================================================//

//var game = Object.create(game);
var game = new game();
game.lancementJeu();
