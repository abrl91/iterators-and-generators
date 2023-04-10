import { TreeNode, inOrderTraversal } from '../src/data-structure';

describe('data-structure', () => {
  test('inOrderTraversal generator should produce the correct sequence of values', () => {
    const tree = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(6, new TreeNode(5), new TreeNode(7))
    );

    const expectedSequence = [1, 2, 3, 4, 5, 6, 7];

    const traversalSequence = [...inOrderTraversal(tree)];

    expect(traversalSequence).toEqual(expectedSequence);
  });
});
