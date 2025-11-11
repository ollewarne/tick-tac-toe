export class TicTacToe {
    constructor() {
        this.element = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = "Tic Tac Toe";
        this.element.appendChild(title);

        const difficultySection = document.createElement("div");

        const subtitle = document.createElement("h2");
        subtitle.textContent = "What difficulty?";
        difficultySection.appendChild(subtitle);

        const createOption = (id, labelText) => {
            const label = document.createElement("label");
            label.setAttribute("for", id);
            label.textContent = labelText;

            const input = document.createElement("input");
            input.id = id;
            input.name = "difficulty";
            input.type = "radio";

            difficultySection.appendChild(label);
            difficultySection.appendChild(input);
        };

        createOption("easy", "EASY");
        createOption("hard", "HARD");
        createOption("two-players", "TWO PLAYERS");

        this.element.appendChild(difficultySection);

        const gameGrid = document.createElement("div");
        gameGrid.id = "game-grid";
        this.element.appendChild(gameGrid);

        const startButton = document.createElement("button");
        startButton.id = "start-button";
        startButton.textContent = "START"
        this.element.appendChild(startButton);
    }

    render(parent = document.body) {
        parent.appendChild(this.element);
    }
}
