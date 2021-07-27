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
  breadthFirst() {

    let iteration = [];

    let traversal = (current, num) => {
      if (!current) {
        return null;
      }

      if (!iteration[num]) {
        iteration[num] = [current.value];
      } else {
        iteration[num].push(current.value);
      }

      traversal(current.left, num + 1);
      traversal(current.right, num + 1);
    };

    traversal(this.root, 0);

    let flattenArray = (array, result = []) => {

      for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (Array.isArray(value)) {
          flattenArray(value, result);
        } else {
          result[result.length] = value;
        }
      }
      return result;
    };

    return flattenArray(iteration);
  }



  fizzBuzzKaryTree(tree) {
    //  k_arr = this.preOrder();

    // for (let i = 0; i < k_arr.length; i++) {

    //   if (k_arr[i] % 3 === 0 && k_arr[i] % 5 === 0) {
    //     k_arr[i] = 'FizzBuzz';

    //   } else if (k_arr[i] % 3 === 0) {
    //     k_arr[i] = 'Fizz';

    //   } else if (k_arr[i] % 5 === 0) {
    //     k_arr[i] = 'Buzz';

    //   } else {
    //     k_arr[i] = `${k_arr[i]}`;
    //   }
    // }

    // return k_arr;

    let newTree = tree;
    const _traverse = (node) => {
      
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);

      if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz';
  
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
  
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
  
      } else {
        node.value = `${node.value}`;
      }
    }
    
    _traverse(newTree.root);

    return newTree;
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