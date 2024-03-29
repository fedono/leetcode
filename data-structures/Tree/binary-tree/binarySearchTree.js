class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    }
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    else {
      return this.findMinNode(node.left);
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    if (node === null) {
      return null;
    }
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    else if (data > node.data) {
      return this.search(node.right, data);
    }
    else {
      return node;
    }
  }

  /*
  * imp 刚开始看，好像下面这三个遍历都一样
  *   但是其实还是不一样，而且肯定是不一样，要不然怎么会是三种遍历呢
  *
  * imp 不一样的点在于这里的 console.log 的顺序，输出的顺序就是遍历的结果
  *  可以换成 arr.push(node.data) 最后的 arr 的数据就是遍历的结果
  * */
  // 前序遍历
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // 中序遍历
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // 后续遍历
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}

let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

let root = BST.getRootNode();
console.log(JSON.stringify(root, null, 2));