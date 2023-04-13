import { ticTacToeBoardGenerator } from '../src/tic-tac-toe-generator';

describe('ticTacToeBoardGenerator', () => {
  it('should generate a full tic-tac-toe board with alternating X and O', () => {
    const generator = ticTacToeBoardGenerator();
    const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    let result = generator.next();
    let previousValue = null;

    while (!result.done) {
      const { row, col, value } = result.value;
      expect(board[row][col]).toBeNull();
      board[row][col] = value;

      if (previousValue) {
        expect(previousValue).not.toEqual(value);
      }

      previousValue = value;
      result = generator.next();
    }

    board.forEach((row) =>
      row.forEach((cell) => {
        expect(cell).toMatch(/^(X|O)$/);
      })
    );
  });
});
