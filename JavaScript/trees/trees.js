class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}



class BinaryTree {
  constructor() {
    this.root = null;
  }



  preOrder() {
    const arr = [];
    const preOrder = (node) => {
      arr.push(node.value);

      if (node.left) {
        preOrder(node.left);
      }

      if (node.right) {
        preOrder(node.right);
      }
    };

    let current = this.root;
    preOrder(current);

    return arr;
  }


  preOrderTraversal() {
    const stack = [];

    if (this.root !== null) {
      stack[stack.length] = this.root;
    }

    const result = [];

    while (stack.length > 0) {
      let node = stack.pop();
      result[result.length] = node.value;

      if (node.right !== null) {

        stack[stack.length] = node.right;
      }

      if (node.left !== null) {
        stack[stack.length] = node.left;

      }
    }

    return result;
  }


  postOrder() {
    const arr = [];

    const postOrder = (node) => {
      if (node.left) {
        postOrder(node.left);
      }

      if (node.right) {
        postOrder(node.right);
      }
      arr.push(node.value);
    };

    let current = this.root;
    postOrder(current);

    return arr;
  }




  inOrder() {
    const arr = [];

    const inOrder = (node) => {

      if (node.left) {
        inOrder(node.left);
      }

      arr.push(node.value);

      if (node.right) {
        inOrder(node.right);
      }
    };

    let current = this.root;
    inOrder(current);

    return arr;
  }

  maxTree() {
    const arr = [];
    let max = 0;
    const search = (node) => {
      if (node.left) {
        search(node.left);
      }

      arr.push(node.value);

      if (node.right) {
        search(node.right);
      }
    };

    let current = this.root;
    search(current);

    arr.map(ele => {
      if (ele > max) max = ele;
    })
    
    return max;

  }
}




class BinaryTreeSearch {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) {

        return false;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;

          return this;
        }
        current = current.left;

      } else {
        if (current.right === null) {
          current.right = newNode;

          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let exists = false;
    while (current && !exists) {
      if (value < current.value) {
        current = current.left;
      }

      else if (value > current.value) {
        current = current.right;

      } else {
        exists = true;
      }
    }

    if (!exists) {

      return false;
    }

    return exists;
  }
}




module.exports = {
  bt: BinaryTree,
  bts: BinaryTreeSearch,
  node: Node
}