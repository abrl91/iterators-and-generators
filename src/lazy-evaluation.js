// example 5: Lazy Evaluation
function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const iterator = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(iterator.next().value);
}

export { fibonacci };