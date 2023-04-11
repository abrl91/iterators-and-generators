function* coroutineA() {
  yield 'A1';
  yield 'A2';
  yield 'A3';
}

function* coroutineB() {
  yield 'B1';
  yield 'B2';
  yield 'B3';
}

function runCoroutines(coroutines) {
  let activeCoroutines = coroutines.slice();
  while (activeCoroutines.length > 0) {
    activeCoroutines = activeCoroutines.filter((coroutine) => {
      const { value, done } = coroutine.next();
      if (!done) {
        console.log(value);
        return true;
      }
      return false;
    });
  }
}

runCoroutines([coroutineA(), coroutineB()]);

export { coroutineA, coroutineB, runCoroutines };
