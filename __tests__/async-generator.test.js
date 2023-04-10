import { runAsync, asyncGenerator } from '../src/async-generator';

describe('async-generator', () => {
  describe('runAsync', () => {
    afterEach(() => {
      jest.clearAllTimers();
    });

    it('should call console.log with correct messages and at the right time', async () => {
      const logMock = jest.fn();
      const generator = () => asyncGenerator(logMock);

      runAsync(generator).then(() => {
        expect(logMock).toHaveBeenCalledTimes(3);
        expect(logMock).toHaveBeenNthCalledWith(1, 'Start');
        expect(logMock).toHaveBeenNthCalledWith(2, 'After 1 second');
        expect(logMock).toHaveBeenNthCalledWith(3, 'After 2 more seconds');
      });

      jest.advanceTimersByTime(1000);
      jest.advanceTimersByTime(2000);
    }, 10000);
  });
});
