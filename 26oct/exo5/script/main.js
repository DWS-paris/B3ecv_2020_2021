/* 
Déclaration
*/
var price = 0;

/* 
Demander l'âge du spectateur-trice
*/
var userAge = prompt("Quel est votre âge ?");

// Vérifier l'âge
if( +userAge >= 18 ){
    price += 12;
}
else{
    price += 7;
}

var option = prompt("Voulez-vous du popcorn (oui ou non) ?");

if( option == "oui" ){
    price += 5
}

console.log(price);

/* 
Majeur => 12
Mineur => 7
Popcorn => 5
*/

