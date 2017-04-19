var arme = {
    // Initialise les armes
    init: function(nom, degat, position) {
        this.nom = nom;
        this.degat = degat;
    },

    // Renvoie la description de l'arme
    decrire: function() {
        var description = this.nom + " fait " + this.degat + " points de dégâts";
        return description;
    }
};

var arme1 = Object.create(arme);
arme1.init("lanceur de bisoux", 10);

var arme2 = Object.create(arme);
arme2.init("lanceur de cailloux", 20);

var arme3 = Object.create(arme);
arme3.init("patator", 50);

var arme4 = Object.create(arme);
arme4.init("headshotter", 100);

console.log(arme1.decrire());
console.log(arme2.decrire());
console.log(arme3.decrire());
console.log(arme4.decrire());

// stocker l' état dans une variable

/*
getWeapon() {
		return new Promise((resolve, reject) => {
			resolve(new Weapon());
		});
	}

	initWeapons() {
		return new Promise((resolve, reject) => {
			const WeaponList = [{
				name: 'Sabre Lacère',
				url: 'images/wp/wp1',
				degats: 40
			}, {
				name: 'Cricket Gun',
				url: 'images/wp/wp2',
				degats: 50
			}, {
				name: 'MicroSoftateuse',
				url: 'images/wp/wp3',
				degats: 30
			}, {
				name: 'Bug Tracker',
				url: 'images/wp/wp4',
				degats: 90
			}
		]
			resolve(WeaponList);
		});
	}
}
*/
