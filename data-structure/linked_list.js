'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    if (!value) {
      throw new Error('NO THING');
    }
    this.head = new Node(value, this.head);
    this.size = this.size + 1;
  }

  includes(value) {
    let current = this.head;
    if (!value) {
      throw new Error('Improper value passed as argument');
    }
    if (!current) {
      throw new Error('Linked List invalid');
    }
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    if (!current) {
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while (current) {
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }
  append(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
      this.size = this.size + 1;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.size = this.size + 1;
    }
  }
  insertBefore(value, targetValue) {
    let current = this.head;
    if (current.value === targetValue) {
      this.insert(value);
    } else {
      while (current.next.value !== targetValue) {
        current = current.next;
      }
      let temp = new Node(value);
      temp.next = current.next;
      current.next = temp;
      this.size = this.size + 1;
    }
  }
  insertAfter(value, targetValue) {
    let current = this.head;
    while (current.value !== targetValue) {
      current = current.next;
    }
    let temp = new Node(value);
    temp.next = current.next;
    current.next = temp;
    this.size = this.size + 1;
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    let count = this.size - 1;
    while (currentNode) {
      if (k === count) {
        return currentNode.value;
      }
      count--;
      currentNode = currentNode.next;
    }
    return 'Exception';
  }

}


module.exports = {
  ll: LinkedList,
  node: Node
};
