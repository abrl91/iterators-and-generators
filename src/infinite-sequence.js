function* uniqueIdGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const idGenerator = uniqueIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

export { uniqueIdGenerator };