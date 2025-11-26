import { GameUi } from "./GameUi.js";
import { checkVictory } from "../utils/checkVictory.js";

export class Game {

    constructor() {
        this.gameBoard;
        this.gridSize = 3;
        this.playerOne = "X";
        this.playerTwo = "O";
        this.turnCounter = 1;
        this.gameRunning = false;
        this.opponentComputer = false;

        this.boundTurnHandler = this.handleTurn.bind(this);

        this.gameBoxes = [];

        this.gameUi = new GameUi();
    }

    initUi() {
        this.gameUi.placeDomElement();
        this.gameUi.gameButton.addEventListener('click', (event) => {
            if (!this.gameUi.difficultySection.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                this.gameUi.difficultySection.reportValidity();
                return;
            }
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
                this.gameBoxes.push(item);
                this.gameUi.gameGrid.appendChild(item)
            }
        }
        this.gameUi.gameGrid.addEventListener('click', this.boundTurnHandler)
    }

    createGameBoardArray(gridSize) {
        this.gameBoard = Array.from({length: gridSize }, () => Array(gridSize).fill(""));
    }

    checkForVictory(player) {
        const win = checkVictory(this.gameBoard, player);
        if (!win) return;
        const diagonalWinIds = ["r0-c0", "r1-c1", "r2-c2"];
        const reverseDiagonalWinIds = ["r2-c0", "r1-c1", "r0-c2"];
        for (let box of this.gameBoxes) {
            // the id for each box has this format "rx-cx", where x == the index for either the row or column
            let row = parseInt(box.id[1]);
            let col = parseInt(box.id[4]);
            if (win.type === "row" && row === win.row) box.classList.add("winning-line");
            if (win.type === "column" && col === win.column) box.classList.add("winning-line");
            if (win.type === "diagonal" && diagonalWinIds.includes(box.id)) box.classList.add("winning-line");
            if (win.type === "reverseDiagonal" && reverseDiagonalWinIds.includes(box.id)) box.classList.add("winning-line");
        }
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
