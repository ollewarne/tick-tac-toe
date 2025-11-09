import { checkVictory } from "./utils/checkVictory.js";

class Game {

    constructor(playerOneMarker, playerTwoMarker, gameID) {
        this.gameBoard = [["", "", ""],["", "", ""],["", "", ""]],
        this.playerOne = playerOneMarker,
        this.playerTwo = playerTwoMarker,
        this.gameID = gameID,
        this.turnCounter = 1
    }

    renderGame() {
        const gameGrid = document.querySelector("#game-grid");
        gameGrid.replaceChildren("")
        for (let row of this.gameBoard) {
            for (let column = 0; column < row.length; column++) {
                let item = document.createElement("div");
                item.classList.add("game-grid-item");
                item.id = `r${this.gameBoard.indexOf(row)}-c${column}`
                item.addEventListener('click', (event) => {
                    this.handleTurn(event)
                })
                gameGrid.appendChild(item)
            }
        }
    }

    handleTurn(event) {
        if (this.turnCounter > 4) {
            console.log("looking for victory")
        }
        if (this.turnCounter % 2 === 0) {
            event.target.textContent = this.playerTwo;
            event.target.style.color = "blue"
        } else {
            event.target.textContent = this.playerOne;
            event.target.style.color = "green"
        }
        this.turnCounter++
    }
}

let game1 = new Game("X", "O", 1);
game1.renderGame();
