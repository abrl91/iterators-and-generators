function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = simpleGenerator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

export { simpleGenerator };
