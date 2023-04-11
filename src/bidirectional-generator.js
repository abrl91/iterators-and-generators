function* bidirectionalGenerator() {
  const name = yield 'What is your name?';
  yield `Hello, ${name}!`;
}

const iterator = bidirectionalGenerator();
console.log(iterator.next().value);
console.log(iterator.next('Syntactic Sugar').value);

export { bidirectionalGenerator };
