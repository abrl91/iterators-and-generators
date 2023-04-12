function binaryTreeNode(value) {
  let node = { value };
  node[Symbol.iterator] = function* () {
    yield node.value;
    if (node.left) {
      yield* node.left;
    }
    if (node.right) {
      yield* node.right;
    }
  };
  return node;
}

const tree = {
  root: binaryTreeNode('root'),
  left: binaryTreeNode('left'),
  right: binaryTreeNode('right'),
  leftLeft: binaryTreeNode('left L1'),
  leftRight: binaryTreeNode('left R1'),
  rightLeft: binaryTreeNode('right L2'),
  rightRight: binaryTreeNode('right R2'),
};

tree.root.left = tree.left;
tree.root.right = tree.right;
tree.left.left = tree.leftLeft;
tree.left.right = tree.leftRight;
tree.right.left = tree.rightLeft;
tree.right.right = tree.rightRight;

for (const value of tree.root) {
  console.log(value);
}
