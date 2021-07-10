const Node = require('../data-structure/linked_list').node;

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    if (!this.top) {
      return 'exception'
    }
    return this.top.value;
  }
  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }
  pop() {
    let current = this.top;
    if (current) {
      this.top = current.next;
      current = current.next;
      return current;
    } else {
      return 'exception';
    }
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;