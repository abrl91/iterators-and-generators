function* bidirectionalGenerator() {
  const message = 'What is your name?';
  const name = yield message;
  yield `Hello, ${name}!`;
}

const iterator = bidirectionalGenerator();
console.log(iterator.next().value);
console.log(iterator.next('Syntactic Sugar').value);

export { bidirectionalGenerator };
