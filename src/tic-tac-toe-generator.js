const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function* ticTacToeBoardGenerator() {
  const X = 'X';
  const O = 'O';
  const availableSpots = [];
  let currentPlayer = X;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      availableSpots.push([row, col]);
    }
  }

  while (availableSpots.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableSpots.length);
    const [row, col] = availableSpots.splice(randomIndex, 1)[0];
    yield { row, col, value: currentPlayer };
    currentPlayer = currentPlayer === X ? O : X;
  }
}

const generator = ticTacToeBoardGenerator();
let result = generator.next();

do {
  const { row, col, value } = result.value;
  board[row][col] = value;
  console.log(`Setting board[${row}][${col}] to ${value}`);
  result = generator.next();
} while (!result.done);

console.log('Generated Tic-tac-toe board:');
console.log(board.map((row) => row.join(' ')).join('\n'));

export { ticTacToeBoardGenerator };