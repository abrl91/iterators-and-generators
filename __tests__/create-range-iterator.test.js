import { createRangeIterator } from '../src/create-range-iterator';

describe('create-range-iterator', () => {
  it('should correctly generate a range of numbers with a given step', () => {
    const iterator = createRangeIterator(2, 11, 3);
    const expectedValues = [2, 5, 8, 3];

    for (const expectedValue of expectedValues) {
      const { value, done } = iterator.next();
      expect(value).toBe(expectedValue);
      expect(done).toBe(expectedValue === 3);
    }
  });

  it('should handle default step value', () => {
    const iterator = createRangeIterator(0, 3);
    const expectedValues = [0, 1, 2, 3];

    for (const expectedValue of expectedValues) {
      const { value, done } = iterator.next();
      expect(value).toBe(expectedValue);
      expect(done).toBe(expectedValue === 3);
    }
  });
});
