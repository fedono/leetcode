const inorderTraversal = function(root) {
  let nums = [];
  let stack = [];

  while (root || stack.length) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    nums.push(root.val);
    root = root.right;
  }
  return nums;
}

let root = {
  left: {
    left: {

    },
    val: '',
    right: {

    }
  }
}