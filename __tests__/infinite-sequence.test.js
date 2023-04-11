import { uniqueIdGenerator } from '../src/infinite-sequence';

describe('infinite-sequence', () => {
  describe('uniqueIdGenerator', () => {
    it('should generate unique, consecutive IDs', () => {
      const idGenerator = uniqueIdGenerator();
      const firstId = idGenerator.next().value;
      const secondId = idGenerator.next().value;
      const thirdId = idGenerator.next().value;

      expect(firstId).toBe(1);
      expect(secondId).toBe(2);
      expect(thirdId).toBe(3);
    });

    it('should generate unique IDs for multiple instances', () => {
      const idGenerator1 = uniqueIdGenerator();
      const idGenerator2 = uniqueIdGenerator();

      const id1a = idGenerator1.next().value;
      const id1b = idGenerator1.next().value;

      const id2a = idGenerator2.next().value;
      const id2b = idGenerator2.next().value;

      expect(id1a).toBe(1);
      expect(id1b).toBe(2);
      expect(id2a).toBe(1);
      expect(id2b).toBe(2);
    });
  });
});
