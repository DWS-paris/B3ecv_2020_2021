/* 
Déclarer deux variables :
- 1 pour le bouton redBtn
- 1 pour le bouton greenBtn
=> document.querySelector()
*/
var greenBtn = document.querySelector("#greenBtn");
var redBtn = document.querySelector("#redBtn");
var bodyTag = document.querySelector('body');


/* 
Capter le click sur les deux boutons
- le bouton vert ajoute la classe .greenBody sur la balise <body>
- le bouton rouge ajoute la classe .redBody sur la balise <body>
=> addEventListener()
=> classList.add()
*/
greenBtn.addEventListener("click", function(){
    bodyTag.classList.remove("redBody");

    // Ajouter la classe .greenBody sur la balise <body>
    bodyTag.classList.toggle("greenBody");
});

redBtn.addEventListener("click", function(){
    bodyTag.classList.remove("greenBody");

    // Ajouter la classe .redBody sur la balise <body>
    bodyTag.classList.toggle("redBody");
});