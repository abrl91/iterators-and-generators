import { fibonacci } from '../src/lazy-evaluation';

describe('lazy-evaluation', () => {
  test('fibonacci generator should produce the correct sequence of values', () => {
    const iterator = fibonacci();

    // array of the first 10 fibonacci numbers (i < 10)
    const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

    expectedSequence.forEach((value) => {
      expect(iterator.next().value).toBe(value);
    });
  });
});
