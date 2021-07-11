'use strict';

const Pseudo = require('../pseudoQueue');
const Node = require('../../data-structure/linked_list').node


describe('Testing enqueue function', () => {
  it('Should add values to the pseudoqueue', () => {
    const pseudo = new Pseudo;
    pseudo.enqueue(new Node(1));
    pseudo.enqueue(new Node(2));
    pseudo.enqueue(new Node(3));

    expect(pseudo.back.top.value).toEqual(3);
  });
});

describe('Testing dequeue function', () => {
  it('Should remove first value added to the pseudoqueue', () => {
    const pseudo = new Pseudo;
    pseudo.enqueue(new Node(1));
    pseudo.enqueue(new Node(2));
    pseudo.enqueue(new Node(3));
    pseudo.enqueue(new Node(4));
    expect(pseudo.dequeue()).toEqual(1);
    expect(pseudo.dequeue()).toEqual(2);

  });
});