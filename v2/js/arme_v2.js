//================================================================================================================================================//
//============================================================= Objet Arme ======================================================================//
//================================================================================================================================================//

function Arme (nom, degat, url) {
  this.nom = nom;
  this.degat = degat;
  this.url = url;
}

// Renvoie la description de l'arme
function descriptionArme() {
    var description = this.nom + " fait " + this.degat + " points de dégâts";
    return description;
}

var arme1 = new Arme ("lanceur de bisoux intergalactique", 10, src="../img/arme1.png");

var arme2 = new Arme ("lanceur de cailloux intergalactique", 25, src="../img/arme2.png");

var arme3 = new Arme ("patator intergalactique", 50, src="../img/arme3.png");

var arme4 = new Arme ("headshotter intergalactique", 100, src="../img/arme4.png");
