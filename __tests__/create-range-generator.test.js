import { createRangeGenerator } from '../src/create-range-generator';

describe('create-range-generator', () => {
  it('should correctly generate a range of numbers with a given step', () => {
    const iterator = createRangeGenerator(0, 10, 2);
    const expectedValues = [0, 2, 4, 6, 8];

    for (const expectedValue of expectedValues) {
      const { value, done } = iterator.next();
      expect(value).toBe(expectedValue);
      expect(done).toBe(false);
    }

    const { done } = iterator.next();
    expect(done).toBe(true);
  });

  it('should handle default step value', () => {
    const iterator = createRangeGenerator(0, 3);
    const expectedValues = [0, 1, 2];

    for (const expectedValue of expectedValues) {
      const { value, done } = iterator.next();
      expect(value).toBe(expectedValue);
      expect(done).toBe(false);
    }

    const { done } = iterator.next();
    expect(done).toBe(true);
  });
});
