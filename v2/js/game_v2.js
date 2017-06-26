//=================================================================================================================================================//
//============================================================= Objet Game ========================================================================//
//=================================================================================================================================================//

function game() {
    this.compteur_de_tour = 0;
    this.map = new map( 10, 10 );

	// déclaration des personnages
	this.perso1;
    this.perso2;
	this.perso_actuel;

    // fonction qui lance le jeu
    this.lancementJeu = function() {
		// initialise la map
        this.map.genere_carte_aleat();
		// initialise les personnages
		this.perso1 = this.map.getPerso1();
		this.perso2 = this.map.getPerso2();
        console.log(this.map.arsenal["arme1Class"].decrireArme()); // vérifie l'arme1
        console.log(this.map.arsenal["arme2Class"].decrireArme()); // vérifie l'arme2
        console.log(this.map.arsenal["arme3Class"].decrireArme()); // vérifie l'arme3
        console.log(this.map.arsenal["arme4Class"].decrireArme()); // vérifie l'arme4
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

    // incrémente le compteur_de_tour et change de this.perso_actuel si > 3
    this.verifieCompteur = function() {
        this.compteur_de_tour++;
        if ( this.compteur_de_tour >= 3 ) {
            this.perso_actuel == this.perso1 ? this.perso_actuel = this.perso2 : this.perso_actuel = this.perso1;
            this.compteur_de_tour = 0;
            alert("changement perso");
        }
    };

    //permet de réagir à l'appui de touche sur le clavier
    this.toucheEnfonce = function() {

			var self = this;

        $(document).keydown(function(e) { //où se trouve le perso

            var old_index = getIndexPerso(self.perso_actuel); // position actuelle du perso avant déplacement

            if (e.which == 37) { // vers la gauche
                colonne--; // on se dirige vers la colonne précedante
                if(colonne >= 0) { // ne pas sortir de la map
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    self.perso_actuel.deplace(old_index, next_index, "gauche", self.map);
                }
            }

            else if (e.which == 38) { // vers le haut
                ligne--; // on se dirige vers la ligne précédante
                var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                self.perso_actuel.deplace(old_index, next_index, "haut", self.map);
            }

            else if (e.which == 39) { // vers la droite
                colonne++; // on se dirige vers la colonne suivant
                if (colonne < self.map.nombre_case_X) { // ne pas sortir de la map
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    self.perso_actuel.deplace(old_index, next_index, "droite", self.map);
                }
            }

            else if (e.which == 40) { // vers le bas
                ligne++; // on se dirige vers la ligne suivante
                if(ligne < self.map.nombre_case_Y) { // ne pas sortir de la map
                    var next_index = getIndex(ligne, colonne, longueur); // l'index de la case suivante
                    self.perso_actuel.deplace(old_index, next_index, "bas", self.map);
                }
            }
        });
    };

}

//=================================================================================================================================================//

var game = new game();
game.lancementJeu();
