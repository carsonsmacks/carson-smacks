const board = document.getElementById('checkers-board');
const boardSize = 8;

function createBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
                if (row < 3) {
                    const piece = document.createElement('div');
                    piece.classList.add('piece', 'red-piece');
                    square.appendChild(piece);
                } else if (row > 4) {
                    const piece = document.createElement('div');
                    piece.classList.add('piece', 'black-piece');
                    square.appendChild(piece);
                }
            }
            board.appendChild(square);
        }
    }
}

createBoard();
