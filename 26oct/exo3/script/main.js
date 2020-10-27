var myNav = document.querySelector('#myNav');

/* 
Déclarer un tableau
*/
var myArray = [ "Accueil", "Porfolio", "Contacts" ];

/* 
Faire une boucle sur un tableau (collection de données)
*/
for( var item of myArray ){
    // Créer une balise LI et y ajouter la valeur de item
    var newLi = document.createElement("li");
    newLi.innerText = item;

    // Ajouter la balise LI dans myNav
    myNav.appendChild(newLi);
};