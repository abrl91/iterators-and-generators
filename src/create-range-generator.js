function* createRangeGenerator(start, end, step = 1) {
  let current = start;

  do {
    yield current;
    current += step;
  } while (current < end);
}

const iterator = createRangeGenerator(0, 10, 2);

for (const value of iterator) {
  console.log(value);
}

export { createRangeGenerator };