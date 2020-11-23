/* 
Récupérer la valeur du local storage
*/
    var connectedUser = localStorage.getItem('user-name');
    var userScore = localStorage.getItem('user-score');
    var computerScore = localStorage.getItem('computer-score');
//


/* 
Capter la soumission du formulaire
- Récupérer la valeur de l'input userName
- Enregistrer le pseudo en local storage
*/
    var saveUserName = function(){
        // Déclarer des variables
        var myForm = document.querySelector('#home form');
        var userName = document.querySelector('#home input');

        // Capter la soumission du formulaire
        myForm.addEventListener('submit', function(event){
            // Stopper l'événemebt submit
            event.preventDefault();

            // Récupérer la valeur de l'input userName
            var pseudo = userName.value;

            // Enregistrer le pseudo en local storage
            localStorage.setItem('user-name', pseudo);

            // Masquer la balise #home et afficher la balise #game
            document.querySelector('#home').classList.add('hidden');
            document.querySelector('#game').classList.remove('hidden');

            // Afficher le pseudo utilisateur
            document.querySelector('#userPseudo').innerHTML = pseudo;

            // Lancer le jeu
            chifoumyGame();
        });
    };
//


/* 
- Capter le click sur les 3 boutons du jeu
- Définir le jeu de l'ordinateur
- Comparer le jeu de l'internaute à celui de l'ordinateur
*/
    var chifoumyGame = function(){
        // Déclarer des variables pour les boutons
        var stoneBtn = document.querySelector('#stoneBtn');
        var paperBtn = document.querySelector('#paperBtn');
        var scissorsBtn = document.querySelector('#scissorsBtn');

        // Créer une variable pour le choix de l'internaute
        var userChoice = undefined;

        // Capter le click sur chacun des boutons
        stoneBtn.addEventListener('click', function(){
            // Définir le choix de l'internaute
            userChoice = 'pierre';
            
            // Définir le choix de l'odinateur
            var computeurRandom = computerBet();
            
            // Calculer le résultat
            result(userChoice, computeurRandom);
        });
        paperBtn.addEventListener('click', function(){
            // Définir le choix de l'internaute
            userChoice = 'feuille';
            
            // Définir le choix de l'odinateur
            var computeurRandom = computerBet();
            
            // Calculer le résultat
            result(userChoice, computeurRandom);
        });
        scissorsBtn.addEventListener('click', function(){
            // Définir le choix de l'internaute
            userChoice = 'ciseaux';
            
            // Définir le choix de l'odinateur
            var computeurRandom = computerBet();
            
            // Calculer le résultat
            result(userChoice, computeurRandom);
        });
    };
//


/* 
Définir le choix de l'odinateur
*/
    var computerBet = function(){
        // Déclarer un tableau contenant les trois choix possibles
        var choices = [ 'pierre', 'feuille', 'ciseaux' ];

        // Définir un nombre aléatoire
        var randomValue = Math.floor(Math.random() * choices.length);
        
        // Renvoyer le choix de l'ordinateur
        return choices[randomValue];
    };
//


/* 
Définir le résultat du jeu
*/
    var result = function( userChoice, computeurChoice ){
        // Décalrer une variable pour #computerGame
        var computerGame = document.querySelector('#computerGame');

        // Afficher la bonne image dans computerGame
        computerGame.innerHTML = `<img src="./img/${computeurChoice}.svg" alt="Pierre">`;

        // Comparer les choix
        if( userChoice === computeurChoice ){
            computerGame.innerHTML += '<p>Egalité</p>';
        }
        else if( 
            userChoice === 'pierre' && computeurChoice === 'ciseaux'
        ){
            computerGame.innerHTML += '<p>Gangé !</p>';
            displayScore('gagné');
        }
        else if( 
            userChoice === 'feuille' && computeurChoice === 'pierre'
        ){
            computerGame.innerHTML += '<p>Gangé !</p>';
            displayScore('gagné');
        }
        else if( 
            userChoice === 'ciseaux' && computeurChoice === 'feuille'
        ){
            computerGame.innerHTML += '<p>Gangé !</p>';
            displayScore('gagné');
        }
        else{
            computerGame.innerHTML += '<p>Perdu...</p>';
            displayScore('perdu');
        };

        // Ajouter le bouton "Rejouer"
        computerGame.innerHTML += '<button id="playAgain">Rejouer</button>';

        // Capter le clic sur le bouton rejouer
        document.querySelector('#playAgain').addEventListener('click', function(){
            // Vider la balise computerGame
            computerGame.innerHTML = '';
        });
    };
//

/* 
Fonction pour afficher et calculer le score
*/
    var displayScore = function(result) { 

        if( result === 'gagné' ){
            // Récupérer le score actuel
            var score = +localStorage.getItem('user-score');

            // Ajouter 1 au score
            score++;

            // Afficher le score dans la page
            document.querySelector('#userScore').innerHTML = score;

            // Mettre le local storage
            localStorage.setItem('user-score', score);
        }
        else{
            // Récupérer le score actuel
            var score = +localStorage.getItem('computer-score');

            // Ajouter 1 au score
            score++;

            // Afficher le score dans la page
            document.querySelector('#computerScore').innerHTML = score;

            // Mettre le local storage
            localStorage.setItem('computer-score', score);
        };
    };
//


/* 
Vérifier la valeur du local storage
- Si elle est égale à nul : afficher le formulaire et activer la fonction
- Si elle est différente de null : afficher le jeu
*/
    if( connectedUser === null && userScore === null && computerScore === null ){
        // Supprimer classe hidden de la balise #home
        document.querySelector('#home').classList.remove('hidden');
        
        // Activer la fonction du formulaire
        saveUserName();

        // Initialiser les scores
        localStorage.setItem('user-score', 0);
        localStorage.setItem('computer-score', 0);
    }
    else{
        // Supprimer classe hidden de la balise #game
        document.querySelector('#game').classList.remove('hidden');

        // Afficher le pseudo et les score
        document.querySelector('#userPseudo').innerHTML = connectedUser;
        document.querySelector('#userScore').innerHTML = userScore;
        document.querySelector('#computerScore').innerHTML = computerScore;

        // Activer la fonction du jeu
        chifoumyGame();
    };
//