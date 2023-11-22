

const buttonGames = document.querySelector(".button-start");
const containerBig = document.querySelector("article.container-grid");
const selectGames = document.querySelector("select#difficulty");
const totalBombs = 16;
const bombsGames = [];


buttonGames.addEventListener("click", function () {
    containerBig.innerHTML = "";    
    
    for (let index = 0; index < 100; index++) {
        const currentSquare = createdSquare(index);
        
        currentSquare.addEventListener("click", function () {                 
            currentSquare.classList.toggle("bg-color");
            console.log("cella numero:", index + 1);
        });
        containerBig.appendChild(currentSquare);
    }
    containerBig.style.display = "flex";
});

while (bombsGames.length < totalBombs){
    const numberBombs = Math.floor(Math.random() * 100) + 1;
    bombsGames.push(numberBombs);
}


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



