const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);

    if (!this.rootNode) {
      this.rootNode = node;
    } else {
      this.insertNode(this.rootNode, node);
    }
  }
  
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (!node) {
      return false;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return true;
    }
  }
  

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, key) {
    if (!node) {
      return null;
    }

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.data = this.findMinValue(node.right);
      node.right = this.removeNode(node.right, node.data);
      return node;
    }
  }

  findMinValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  min() {
    return this.findMinValue(this.rootNode);
  }

  findMaxValue(node) {
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  max() {
    return this.findMaxValue(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};