function createRangeIterator(start, end, step = 1) {
  let current = start;
  let iterationCount = 0;

  return {
    next: function () {
      if (current < end) {
        const value = current;
        current += step;
        iterationCount++;
        return { value, done: false };
      }

      return { value: iterationCount, done: true };
    },
  };
}

const iterator = createRangeIterator(0, 10, 2);

let result = iterator.next();

do {
  result = iterator.next();
  console.log(result.value);
} while (!result.done);

export { createRangeIterator };
