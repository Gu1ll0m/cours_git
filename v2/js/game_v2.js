//================================================================================================================================================//
//============================================================= Objet Game =======================================================================//
//================================================================================================================================================//

function game() {
    this.compteur_de_tour = 0;
    this.map = new map( 10, 10 );

		// déclaration des perso
		this.perso1;
    this.perso2;
		this.perso_actuel;

    // fonction qui lance le jeu
    this.lancementJeu = function() {
				// init map
        this.map.genere_carte_aleat();
				// init perso
				this.perso1 = this.map.getPerso1();
				this.perso2 = this.map.getPerso2();

        // choix aléatoire du joueur qui commence la partie
        if ( nb_aleat(2) > 1 ) {
            this.perso_actuel = this.perso1;
            alert("le joueur 1 commence");
        } else {
            this.perso_actuel = this.perso2;
            alert("le joueur 2 commence");
        }
        this.toucheEnfonce();

    };

    // fonction qui incrémente le compteur_de_tour et change de this.perso_actuel si > 3
    this.verifieCompteur = function() {
        this.compteur_de_tour++;
        if ( this.compteur_de_tour >= 3 ) {
            this.perso_actuel == this.perso1 ? this.perso_actuel = this.perso2 : this.perso_actuel = this.perso1;
            this.compteur_de_tour = 0;
            alert("changement perso");
        }
    };

    //fonction qui permet de réagir à l'appui de touche sur le clavier
    this.toucheEnfonce = function() {

			var self = this;

        $(document).keydown(function(e) { //où se trouve le perso

            var old_index = getIndexPerso(self.perso_actuel); // position actuelle du perso avant déplacement

            if (e.which == 37) { // Vers la gauche
                colonne--; // on se dirige vers la colonne précedante
                if(colonne >= 0) {
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    self.perso_actuel.deplace(old_index, next_index, "gauche");
                }
            }

            else if (e.which == 38) { // Vers le haut
                ligne--; // on se dirige vers la ligne précédante
                var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                self.perso_actuel.deplace(old_index, next_index, "haut");
            }

            else if (e.which == 39) { // Vers la droite
                colonne++; // on se dirige vers la colonne suivant
                if (colonne < self.map.nombre_case_X) {
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    self.perso_actuel.deplace(old_index, next_index, "droite");
                }
            }

            else if (e.which == 40) { // Vers le bas
                ligne++; // on se dirige vers la ligne suivante
                if(ligne < self.map.nombre_case_Y) {
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    self.perso_actuel.deplace(old_index, next_index, "bas");
                }
            }
        });
    };

}

//================================================================================================================================================//

//var game = Object.create(game);
var game = new game();
game.lancementJeu();
