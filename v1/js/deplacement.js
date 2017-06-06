//================================================================================================================================================//

var compteur = 0;
var persoActuel;
var perso1, perso2;


// fonction pour choisir le joueur qui commence la partie
function game() {
  if (generate_random(2) < 1) {
    persoActuel = perso1;
    console.log("le joueur 1 commence");
    alert("le joueur 1 commence");
  } else {
    persoActuel = perso2;
    console.log("le joueur 2 commence");
    alert("le joueur 2 commence");
  }
}

// fonction boucle changement de joueur tous les 3 tours
function checkCompteur() {
  if (compteur >= 3) {
    persoActuel == perso1 ? persoActuel == perso2 : persoActuel == perso1;
    compteur = 0;
    console.log("changement de joueur");
    alert("changement de joueur");
  }
}


//================================================================================================================================================//
//fonction qui permet de gérer les déplacements du personnage
function deplace() {

  $(document).keydown(function(e) { // la fonction se déclenche dès que l'utilisateur prèse une touche

      var persoActuel;
      var p = 50; // longueur en pixel d'une case
      var ligne = parseInt(persoActuel.css('top')) / p; // position en x
      var colonne = parseInt(persoActuel.css('left')) / p; // position en Y
      var longueur = 10; //10 cases par lignes
      var oldIndex = ligne * colonne + longueur; // position actuelle du perso avant déplacement



      function deplacement_deplacement_bloc() {
        if (persoActuel == perso1) {
          $('#etat1').html('Vous faîtes face à un bloc').fadeIn('slow').delay(1000).fadeOut('slow'); // dans un span et disparait au bout de 1 secondes
        } else {
          $('#etat2').html('Vous faîtes face à un bloc').fadeIn('slow').delay(1000).fadeOut('slow');
        }
      }

      function deplacement_deplacement_combat() { /* ici fonction deplacement_combat()*/
        if (persoActuel == perso1) {
          $('#etat1').html('FIGHT').fadeIn('slow').delay(1000).fadeOut('slow');
        } else {
          $('#etat2').html('FIGHT').fadeIn('slow').delay(1000).fadeOut('slow');
        }
      }

      function deplacement_deplacement_arme() { /* ici la fonction equip()*/
        if (persoActuel == perso1) {
          $('#etat1').html('Vous vous équipez d une arme').fadeIn('slow').delay(1000).fadeOut('slow');
        } else {
          $('#etat2').html('Vous vous équipez d une arme').fadeIn('slow').delay(1000).fadeOut('slow');
        }
      }

      function deplacement_bord() {
        if (persoActuel == perso1) {
          $('#etat1').html('Vous faîtes face à un bord').fadeIn('slow').delay(1000).fadeOut('slow');
        } else {
          $('#etat2').html('Vous faîtes face à un bord').fadeIn('slow').delay(1000).fadeOut('slow');
        }
      }

      function touche_gauche() {
        $('#rapport1').html("<img src='../img/pad_gauche.png' class='padClass' id='padGauche'>").fadeIn('slow').delay(100).fadeOut('slow');
        console.log("vers la gauche");
        colonne--; // on se dirige vers la colonne précedante
        compteur++;
        perso1.css('left', parseInt(perso1.css('left')) - p); // donc on se déplace
        console.log("après déplacement index " + " " + index);
      }


      if (e.which == 37) { // Vers la gauche
        touche_gauche();
        if (colonne >= 0) { // si nombreCaseX
          var index = ligne * longueur + colonne; // l'index de la case suivant
          if (tabPosition[index] == 1) { // bloc
            deplacement_deplacement_bloc();
          } else if ((tabPosition[index] == 0) || (tabPosition[index] == 2) || (tabPosition[index] == 4)) {
            perso1.css('left', parseInt(perso1.css('left')) - p); // donc on se déplace
            console.log("après déplacement index " + " " + index);;
            if (tabPosition[index] == 2) { // arme
              deplacement_deplacement_arme();
            }
            if ((tabPosition[index] == 3) || (tabPosition[index] == 4)) { // personnage
              deplacement_deplacement_combat();
            }
            /*tabPosition[index] = 3; // maj index case suivante (contient le $("#perso1"))
            alert("index de la case qui contient le perso" + " " +index);
            tabPosition[oldIndex] = 0; // maj index case précédente (case vide après déplacement)
            alert(" indx de la case précédente" + " " +oldIndex);*/
            compteur++;
            checkCompteur();
          }
        } else {
          deplacement_bord();
        }
      }
    })
  }


deplace();
