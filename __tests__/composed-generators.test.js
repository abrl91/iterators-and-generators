import { generatorB } from '../src/composed-generators';

describe('composed-generators', () => {
  it('should produce the correct sequence of values', () => {
    const iterator = generatorB();
    expect(iterator.next()).toEqual({ value: 3, done: false });
    expect(iterator.next()).toEqual({ value: 1, done: false });
    expect(iterator.next()).toEqual({ value: 2, done: false });
    expect(iterator.next()).toEqual({ value: 4, done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
