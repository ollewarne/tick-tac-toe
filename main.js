import { Game } from "./components/Game.js";


function initialize() {
    const game = new Game("X", "O", 1)
    game.initUi()
}

window.addEventListener("load", initialize);
