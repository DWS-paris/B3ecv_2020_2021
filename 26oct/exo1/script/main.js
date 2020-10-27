/*
Délcaration de variables
*/
var myString = "Mon texte"; // Version ES5
var myNumber = 41;
var myFloat = 41.0;
var myNumberString = "41";
var myBoolean = true;
var myArray = [ "Julien", 41, false, myString ];

var myTag = document.querySelector("h1");

/* 
Manipuler une balise HTML
*/
myTag.innerText = "JAVASCRIPT Exo 1 : les variables";

myTag.addEventListener("click", function(){
    myTag.style.color = "red";
});


/* 
Afficher les données dans la console
*/
console.log( myString, myNumber, myFloat, myNumberString, myBoolean, myArray );
console.log(myTag);