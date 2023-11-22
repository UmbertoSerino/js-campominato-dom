const buttonGames = document.querySelector(".button-start");
const containerBig = document.querySelector("article.container-grid");
const selectGames = document.querySelector("select#difficulty");
const totalBombs = 16;
const bombsGames = [];


buttonGames.addEventListener("click", function () {
    containerBig.innerHTML = "";    
    
    for (let index = 0; index < 100; index++) {
        const currentSquare = createdSquare(index);     
        // seconda funzione addEventListener   
        currentSquare.addEventListener("click", function () {
            console.log("cella numero:", index + 1);
            if (bombsGames.includes(index + 1)) {
                currentSquare.classList.add("bg-color-red")               
            } else {
                currentSquare.classList.toggle("bg-color-aqua");
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


