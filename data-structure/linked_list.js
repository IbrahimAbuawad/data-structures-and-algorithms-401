'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }


  insert(value){
    if(!value){
      throw new Error('nothing');
    }
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
  }

  includes(value){
    let current = this.head;
    if(!value){
      throw new Error('Improper value passed as argument');
    }
    if(!current){
      throw new Error('Linked List invalid');
    }
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let current = this.head;
    if(!current){
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while(current){
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }
}
  module.exports = {
    ll: LinkedList,
    node: Node
  };
  