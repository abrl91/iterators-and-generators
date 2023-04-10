function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function* memoizedFibonacci() {
  const memoizedFib = memoize(fibonacci);
  let i = 0;

  while (true) {
    yield memoizedFib(i);
    i++;
  }
}

const iterator = memoizedFibonacci();

console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3

export { fibonacci, memoizedFibonacci };
