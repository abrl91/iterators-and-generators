import { bidirectionalGenerator } from '../src/bidirectional-generator';

describe('bidirectional-generator', () => {
  test('should produce the correct sequence of values', () => {
    const iterator = bidirectionalGenerator();
    expect(iterator.next()).toEqual({ value: 'What is your name?', done: false });
    expect(iterator.next('Syntactic Sugar')).toEqual({ value: 'Hello, Syntactic Sugar!', done: false });
  });
});
