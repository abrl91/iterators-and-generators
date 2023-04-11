function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* asyncGenerator(log = console.log) {
  log('Start');
  yield timeout(1000);
  log('After 1 second');
  yield timeout(2000);
  log('After 2 more seconds');
}

async function runAsync(generator) {
  const iterator = generator();
  let result;

  while (!(result = iterator.next()).done) {
    await result.value;
  }
}

runAsync(asyncGenerator);

export { runAsync, asyncGenerator };
