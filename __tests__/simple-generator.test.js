import { simpleGenerator } from '../src/simple-generator';

describe('simpleGenerator', () => {
  test('should produce the correct sequence of values', () => {
    const iterator = simpleGenerator();
    expect(iterator.next()).toEqual({ value: 1, done: false });
    expect(iterator.next()).toEqual({ value: 2, done: false });
    expect(iterator.next()).toEqual({ value: 3, done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
