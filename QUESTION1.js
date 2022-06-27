console.clear()
//Implement Binary tree
console.clear()
class BinarySearchTree {
    constructor(data) {
    this.root = {
        data: data,
      left: null,
      right: null
    };
  }

  insertTo(node, key) {
    if (key < node.data) {
        if (node.left) {
        this.insertTo(node.left, key);
        return;
      } else {
        node.left = new Node(key);
      }
    } else {
        if (node.right) {
        this.insertTo(node.right, key);
        return;
      } else {
        node.right = new Node(key);
      }
    }
  }
}
class Node {
    constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let treeValue = new BinarySearchTree(0);

treeValue.insertTo(treeValue.root, 2);
treeValue.insertTo(treeValue.root, 1);
treeValue.insertTo(treeValue.root, 3);
treeValue.insertTo(treeValue.root, 4);
console.log(treeValue)