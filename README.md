# projet-6 : [__Creez-un-jeu-de-plateau-tour-par-tour-en-JS__](https://openclassrooms.com/projects/creez-un-jeu-de-plateau-tour-par-tour-en-js)



Création d'un jeu en ligne en JavaScript dans lequel 2 joueurs évoluent chacun leur tour pour s'affronter.

Il s' agit ici d' un match à mort entre __Alien__ et __Prédator__ !!!!!!!

Recap des  [__fichiers et fonctions__](recap_fonction.pdf) de notre jeu.


## _Etape 1 : génération de la carte_

1. générer aléatoirement la carte du jeu. 

Chaque case peut être soit vide soit innaccessible.

> [fichier __game.js__](./js/game.js)

> [fichier __map.js__](./js/map.js)


2. Insérer un nombre limité d’armes, placé aléatoirement et pourra être récolté par les joueurs qui passeraient dessus.

Chaque arme à un visuel et des caractéristiques qui lui sont propres.

> [fichier __arme.js__](./js/arme.js)

> [fichier __perso.js__](./js/perso.js)


3. Insérer les deux joueurs de façon aléatoire sur la carte au chargement de la partie.

> [fichier __perso.js__](./js/perso.js)

> [fichier __game.js__](./js/game.js)




## _Etape 2 : les mouvements_

1. Déplacement possible de 3 cases horizontalement et verticalement puis changement de personnage.

Gestion des collisions.

> [fichier __game.js__](./js/game.js)

> [fichier __perso.js__](./js/perso.js)



2. En cas de déplacement sur une case contenant une arme, le joueur laisse son arme actuelle sur place et la remplace par la nouvelle.

> [fichier __perso.js__](./js/perso.js)


## _Etape 3 : le combat !_

Un combat à mort s’engage quand les joueurs se croisent

Plusieurs contraintes : 

> Combat au tour par tour.

> Les caractéristques de l’arme possédée par le joueur modifie ses dégâts infligés.

> Gérer posture offensive (0) et défensive (1)

> Posture défensive (1) :  le joueur encaisse 50% de dégâts en moins qu’en temps normal

> Fin de partie quand les points de vie d'un des deux joueurs tombent à 0.

Un message s’affiche et la partie est terminée.


> [fichier __fight.js__](./js/fight.js)



## Installation du jeu : 
Télécharger [le dossier](https://github.com/Gu1ll0m/projet6_jeu_JS)

Ouvrir le fichier __index.html__, que vous trouverez en suivant le chemin suivant `../P6/html/index.html`, dans votre navigateur `ctrl + o`

