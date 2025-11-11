import { checkVictory } from "./utils/checkVictory.js";
import { Game } from "./components/gameLogic.js";
import { TicTacToe } from "./components/game.js";

let game = new Game("X", "O", 1)

function initialize() {
    const gameMenu = new TicTacToe();
    gameMenu.render()

    const startButton = document.querySelector("#start-button");
    startButton.addEventListener('click', () => {
        game.renderGame()
    })
}

window.addEventListener("load", initialize);
