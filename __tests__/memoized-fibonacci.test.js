import * as memoizedFibonacciModule from '../src/memoized-fibonacci';

describe('memoized-fibonacci', () => {
  it('should generate the correct Fibonacci sequence', () => {
    const iterator = memoizedFibonacciModule.memoizedFibonacci();
    const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const generatedSequence = [];

    for (let i = 0; i < 10; i++) {
      generatedSequence.push(iterator.next().value);
    }

    expect(generatedSequence).toEqual(expectedSequence);
  });

  it('should reuse cached values for previously computed Fibonacci numbers', () => {
    const iterator = memoizedFibonacciModule.memoizedFibonacci();
    const spyOnFibonacci = jest.spyOn(memoizedFibonacciModule, 'fibonacci');

    for (let i = 0; i < 10; i++) {
      iterator.next();
    }

    const callCount = spyOnFibonacci.mock.calls.length;

    // Generate the first 5 Fibonacci numbers again
    for (let i = 0; i < 5; i++) {
      iterator.next();
    }

    // The fibonacci function should not have been called for already computed numbers
    expect(spyOnFibonacci.mock.calls.length).not.toBe(callCount + 5);

    // Restore the original implementation
    spyOnFibonacci.mockRestore();
  });
});
