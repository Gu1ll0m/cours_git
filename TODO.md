# gérer déplacement :
limité à 3 via boucle => OK

# gérer bloc :
- si case suivante est un bloc on ne peut pas se déplacer => OK
- si pas le 3e tour de boucle on peut choisir une autre direction => OK

# gérer les bords de map :
- impossible de sortir de la map via un calcul =>  OK
- si on est face à un bord on est bloqué => OK
- si pas 3e tour de boucle on peut choisir une autre direction => OK

# gérer collision :
- si bloc on n' avance pas => OK
- si arme on l' équipe et on laisse sur place l'arme précédente => OK
- si face à face un combat s' engage. => fonction combat() à coder => OK

- orienté le code en Objet avec déplacements / collision => OK


# gérer l' état des personnages :
- points de vie base 100 => OK
- perte de points de vie quand subit une attaque = dégâts de l'arme portée par l'autre personnage (intégrer dans span recapArmeClass)=> OK et intégrer dans span recapClass.
- si PV = 0 alors fin de la partie => OK
