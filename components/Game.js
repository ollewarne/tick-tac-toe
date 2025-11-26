import { GameUi } from "./GameUi.js";
import { checkVictory } from "../utils/checkVictory.js";

export class Game {

    constructor() {
        this.gameBoard;
        this.gridSize = 3;
        this.playerOne = "X";
        this.playerTwo = "O";
        this.turnCounter = 1;
        this.gameUi = new GameUi();
        this.gameRunning = false;

        this.boundTurnHandler = this.handleTurn.bind(this);
    }

    initUi() {
        this.gameUi.placeDomElement();
        this.gameUi.gameButton.addEventListener('click', () => {
            if (!this.gameRunning) {
                this.startGame();
            } else this.resetGame();
        })
    }

    startGame() {
        this.gameUi.gameGrid.id = "game-grid";
        this.generateGameGrid();
        this.gameUi.gameButton.textContent = "RESET";
        this.gameRunning = true;
    }

    generateGameGrid() {
        this.createGameBoardArray(this.gridSize);
        this.gameUi.gameGrid.replaceChildren("")
        for (let row of this.gameBoard) {
            for (let column = 0; column < row.length; column++) {
                let item = document.createElement("div");
                item.className = "game-grid-item";
                item.id = `r${this.gameBoard.indexOf(row)}-c${column}`
                this.gameUi.gameGrid.appendChild(item)
            }
        }
        this.gameUi.gameGrid.addEventListener('click', this.boundTurnHandler)
    }

    createGameBoardArray(gridSize) {
        this.gameBoard = Array.from({length: gridSize }, () => Array(gridSize).fill(""));
    }

    checkForVictory(player) {
        console.log(checkVictory(this.gameBoard, player))
    }

    handlePlacingMarker(event, player) {
        if (event.target.textContent) return;

        event.target.textContent = player;

        let markerPlacement = event.target.id.split("-");
        let row = markerPlacement[0][1];
        let col = markerPlacement[1][1];
        if (!this.gameBoard[row][col]) this.gameBoard[row][col] = player;
        this.checkForVictory(player)
    }

    handleTurn(event) {
        console.log(this.gameBoard)
        if (event.target.className !== "game-grid-item") return;
        if (this.turnCounter % 2 === 0) {
            this.handlePlacingMarker(event, this.playerTwo);
        } else {
            this.handlePlacingMarker(event, this.playerOne);
        }
        this.turnCounter++
    }

    resetGame() {
        this.gameUi.gameGrid.removeEventListener('click', this.boundTurnHandler);
        this.gameRunning = false;
        this.turnCounter = 1;
        this.gameUi.gameButton.textContent = "START";

    }
}
