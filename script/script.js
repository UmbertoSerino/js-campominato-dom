const buttonGames = document.querySelector(".button-start");
const containerBig = document.querySelector("article.container-grid");
const selectGames = document.querySelector("select#difficulty");
const scoreElement = document.querySelector("span.score");

const totalBombs = 16;



buttonGames.addEventListener("click", function () {
    containerBig.innerHTML = "";
    scoreElement.innerText = "0";    
    let bombsGames = [];
    let goalsScored = [];

    for (let index = 0; index < 100; index++) {
        const currentSquare = createdSquare(index);  
    
        currentSquare.addEventListener("click", function () {
            console.log("cella numero:", index + 1);
    
            if (bombsGames.includes(index + 1)) {
                alert("HAI CLICCATO UNA BOMBA! punteggio: " + goalsScored.length); 
                currentSquare.classList.add("bg-color-red");
                containerBig.innerHTML = "";
                scoreElement.innerText = "0";   
            } else {
                if (!goalsScored.includes(index + 1)) {
                    currentSquare.classList.add("bg-color-aqua");
                    goalsScored.push(index + 1);
                    scoreElement.innerText = "" + goalsScored.length;
    
                    if (goalsScored.length === 100 - totalBombs) {
                        alert("HAI VINTO! Punteggio: " + goalsScored.length);
                        // Altre azioni in caso di vittoria
                        containerBig.innerHTML = "";
                        scoreElement.innerText = "0";
                    }
                }
            }
        });
    
        containerBig.appendChild(currentSquare);
        containerBig.style.display = "flex";
    }

    // Generatore di bombe
    while (bombsGames.length < totalBombs){
        const numberBombs = Math.floor(Math.random() * 100) + 1;
        if (!bombsGames.includes(numberBombs)){
            bombsGames.push(numberBombs);
        }
    };
    console.log(bombsGames);

});

// ========== Function ==========
/**
 * funzione per creare una cella!
 */
function createdSquare(index) {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square-class");
    squareElement.innerText = index + 1;
    return squareElement;
}


// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione:
// nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
// - abbiamo calpestato una bomba
// - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
