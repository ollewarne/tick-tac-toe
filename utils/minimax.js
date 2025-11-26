export function bestMove(boardElements, ai, human) {
    let best = { score: -Infinity, move: null };

    for (let i = 0; i < 9; i++) {
        if (boardElements[i].textContent === "") {
            boardElements[i].textContent = ai;
            let score = minimax(boardElements, false, ai, human);
            boardElements[i].textContent = "";
            if (score > best.score) best = { score, move: i };
        }
    }

    return best.move; // returns index 0-8
}

function minimax(board, max, ai, human) {
    let w = checkWinner(board);
    if (w === ai) return 1;
    if (w === human) return -1;
    if (w === "tie") return 0;

    let scores = [];
    for (let i = 0; i < 9; i++) {
        if (board[i].textContent === "") {
            board[i].textContent = max ? ai : human;
            scores.push(minimax(board, !max, ai, human));
            board[i].textContent = "";
        }
    }

    return max ? Math.max(...scores) : Math.min(...scores);
}

function checkWinner(board) {
    const lines = [
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // cols
        [0,4,8],[2,4,6]          // diagonals
    ];

    for (let [a,b,c] of lines) {
        if (board[a].textContent && board[a].textContent === board[b].textContent && board[b].textContent === board[c].textContent)
            return board[a].textContent;
    }

    return board.every(cell => cell.textContent !== "") ? "tie" : null;
}
