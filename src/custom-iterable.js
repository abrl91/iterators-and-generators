const chessBoard = {
  ranks: [1, 2, 3, 4, 5, 6, 7, 8],
  files: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  [Symbol.iterator]: function* () {
    for (let rank of this.ranks) {
      for (let file of this.files) {
        yield rank+file;
      }
    }
  },
};

console.log([...chessBoard]);

export { chessBoard };
