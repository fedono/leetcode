const postOrderTraversal = function (root) {
    const res = [];
    const postOrder = (root) => {
        if (!root) {
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        res.push(root.val);
    };
    postOrder(root);
    return res;
}