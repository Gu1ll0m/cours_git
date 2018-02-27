# projet-6 : [__Creez-un-jeu-de-plateau-tour-par-tour-en-JS__](https://openclassrooms.com/projects/creez-un-jeu-de-plateau-tour-par-tour-en-js)



Création d'un jeu en ligne en JavaScript dans lequel 2 joueurs évoluent chacun leur tour pour s'affronter.

Il s' agit ici d' un match à mort entre __Alien__ et __Prédator__ !!!!!!!

Recap des  [__fichiers et fonctions__](recap_fonction.pdf) de notre jeu.


## _Etape 1 : génération de la carte_

> [fonctions globales dans le fichier __util.js__](./js/util.js)


__1. Générer aléatoirement la carte du jeu.__

Chaque case peut être soit vide soit innaccessible.

> [fichier __game.js__](./js/game.js)

    this.lancementJeu = function() {....}


> [fichier __map.js__](./js/map.js)

    this.genere_carte_aleat = function() {....}


__2. Insérer un nombre limité d’armes, placé aléatoirement qui seront équipé par les joueurs qui passeront dessus.__

Chaque arme à un visuel et des caractéristiques qui lui sont propres.

> [fichier __arme.js__](./js/arme.js)

    this.initArme = function(....) {....}
    this.decrireArme = function(....) {....}

> [fichier __map.js__](./js/map.js)

    this.genere_carte_aleat = function() {....}



__3. Insérer les deux joueurs de façon aléatoire sur la carte au chargement de la partie.__

> [fichier __map.js__](./js/map.js)

    this.genere_carte_aleat = function() {....}




## _Etape 2 : les mouvements_

__1. Déplacement possible de 3 cases horizontalement et verticalement puis changement de personnage.__

Gestion des collisions.

> [fichier __perso.js__](./js/perso.js)

    this.deplace = function(....) {....}
        // boucle if #69
        if (mvt == "gauche") {
          self.elm.css('left', parseInt(self.elm.css('left')) - 100);
        } else if (mvt == "droite") {
          self.elm.css('left', parseInt(self.elm.css('left')) + 100);
        } else if (mvt == "haut") {
          self.elm.css('top', parseInt(self.elm.css('top')) - 100);
        } else if (mvt == "bas") {
          self.elm.css('top', parseInt(self.elm.css('top')) + 100);
        }
        

> [fichier __game.js__](./js/game.js)

    this.verifieCompteur = function() {....}
    this.toucheEnfonce = function() {....}

__2. En cas de déplacement sur une case contenant une arme, le joueur laisse son arme actuelle sur place et la remplace par la nouvelle.__

> [fichier __perso.js__](./js/perso.js)

    this.deplace = function(....) {....}
    // boucle if #103
        if (this.armeDropped && this.armeDropped[0] == old_index) {
            tab_position[old_index] = this.armeDropped[1];
            this.armeDropped[1] = null;
            this.armeDropped[0] = null;
      }


## _Etape 3 : le combat !_

Un combat à mort s’engage quand les joueurs se croisent.

Plusieurs contraintes :

__1. Combat au tour par tour.__

> [fichier __game.js__](./js/game.js)

    this.verifieCompteur = function() {....}


__2. Les caractéristques de l’arme possédée par le joueur modifie ses dégâts infligés.__

> [fichier __fight.js__](./js/fight.js)

    function attaquer() {....}


__3. Gérer posture offensive (0) et défensive (1) : en posture défensive le joueur encaisse 50% de dégâts en moins qu’en temps normal.__

> [fichier __fight.js__](./js/fight.js)

    function defendre() {.....}


__4. Fin de partie quand les points de vie d'un des deux joueurs tombent à 0.__

Un message s’affiche et la partie est terminée.

> [fichier __fight.js__](./js/fight.js)

    function attaquer() {....}




## Installation du jeu :
Télécharger [le dossier](https://github.com/Gu1ll0m/projet6_jeu_JS)

Ouvrir le fichier __index.html__, que vous trouverez en suivant le chemin suivant `../P6/html/index.html`, dans votre navigateur `ctrl + o`

