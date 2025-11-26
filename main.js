import { Game } from "./components/Game.js";


function initialize() {
    let game = new Game("X", "O", 1)

    const startButton = document.querySelector("#start-button");
    startButton.addEventListener('click', () => {
        game.init();
    })
}

window.addEventListener("load", initialize);
