export class GameUi {
    constructor() {
        this.element = document.createElement("div");

        this.title = document.createElement("h1");
        this.title.textContent = "Tic Tac Toe";
        this.element.appendChild(this.title);

        this.difficultySection = document.createElement("div");

        this.subtitle = document.createElement("h2");
        this.subtitle.textContent = "What difficulty?";
        this.difficultySection.appendChild(this.subtitle);

        this.element.appendChild(this.difficultySection);

        this.createOption("easy", "EASY");
        this.createOption("hard", "HARD");
        this.createOption("two-players", "TWO PLAYERS");

        this.gameButton = document.createElement("button");
        this.gameButton.id = "game-button";
        this.gameButton.textContent = "START"
        this.element.appendChild(this.gameButton);

        this.gameGrid = document.createElement("div");
        this.element.appendChild(this.gameGrid);
        this.gameGrid.textContent = "Pick a difficulty and then click the start button to begin!";
    }

    createOption (id, labelText) {
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = labelText;

        const input = document.createElement("input");
        input.id = id;
        input.name = "difficulty";
        input.type = "radio";

        this.difficultySection.appendChild(label);
        this.difficultySection.appendChild(input);
    };

    placeDomElement(parent = document.body) {
        parent.appendChild(this.element);
    }
}
