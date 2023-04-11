function* generatorA() {
  yield 1;
  yield 2;
}

function* generatorB() {
  yield 3;
  yield* generatorA();
  yield 4;
}

const iterator = generatorB();

console.log([...iterator]);

export { generatorA, generatorB };
