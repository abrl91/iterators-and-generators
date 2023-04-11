class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function* inOrderTraversal(node) {
  if (node === null) return;
  yield* inOrderTraversal(node.left);
  yield node.value;
  yield* inOrderTraversal(node.right);
}

const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

for (const value of inOrderTraversal(tree)) {
  console.log(value);
}

export { TreeNode, inOrderTraversal };
