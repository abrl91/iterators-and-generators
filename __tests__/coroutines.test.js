import { coroutineA, coroutineB, runCoroutines } from '../src/coroutines';

describe('coroutines-cooperative-multitasking', () => {
  describe('coroutineA', () => {
    it('should yield expected values', () => {
      const iterator = coroutineA();
      expect(iterator.next().value).toBe('A1');
      expect(iterator.next().value).toBe('A2');
      expect(iterator.next().value).toBe('A3');
      expect(iterator.next().done).toBe(true);
    });
  });

  describe('coroutineB', () => {
    it('coroutineB should yield expected values', () => {
      const iterator = coroutineB();
      expect(iterator.next().value).toBe('B1');
      expect(iterator.next().value).toBe('B2');
      expect(iterator.next().value).toBe('B3');
      expect(iterator.next().done).toBe(true);
    });
  });

  describe('runCoroutines', () => {
    it('runCoroutines should interleave coroutines', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      runCoroutines([coroutineA(), coroutineB()]);

      expect(logSpy.mock.calls).toEqual([['A1'], ['B1'], ['A2'], ['B2'], ['A3'], ['B3']]);

      logSpy.mockRestore();
    });
  });
});
