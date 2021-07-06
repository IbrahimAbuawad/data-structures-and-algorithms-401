'use strict';

const linkedListMaster = require('../linked_list');

const linkedList = linkedListMaster.ll;

const zip = require('../../JavaScript/zipLists/linked_list').zip;

describe('testing  zip function', () => {
    it('same size for two linked list ', () => {
      let linkedlistss = new linkedList;
      linkedlistss.insert(1);
      linkedlistss.append(2);
      linkedlistss.append(3);
      let linkedlisttt = new linkedList;
      linkedlisttt.insert(4);
      linkedlisttt.append(5);
      linkedlisttt.append(6);
      let ll = zip(linkedlistss, linkedlisttt);
      expect(ll.head.value).toEqual(1);
      expect(ll.head.next.value).toEqual(4);
      expect(ll.head.next.next.value).toEqual(2);
    });
    it('first linked list greater than second linked list ', () => {
      let linkedlistss = new linkedList;
      linkedlistss.insert(1);
      linkedlistss.append(2);
      linkedlistss.append(3);
  
      let linkedlisttt = new linkedList;
      linkedlisttt.insert(4);
      linkedlisttt.append(5);
  
      let ll = zip(linkedlistss, linkedlisttt);
      expect(ll.head.value).toEqual(1);
      expect(ll.head.next.value).toEqual(4);
      expect(ll.head.next.next.value).toEqual(2);
      expect(ll.head.next.next.next.value).toEqual(5);
      expect(ll.head.next.next.next.next.value).toEqual(3);
      expect(ll.head.next.next.next.next.next).toEqual(null);
    });
    it('second linked list greater than first linked list ', () => {
      let linkedlistss = new linkedList;
      linkedlistss.insert(1);
      linkedlistss.append(2);
      let linkedlisttt = new linkedList;
      linkedlisttt.insert(4);
      linkedlisttt.append(5);
      linkedlistss.append(3);
  
      let ll = zip(linkedlistss, linkedlisttt);
      expect(ll.head.value).toEqual(1);
      expect(ll.head.next.value).toEqual(4);
      expect(ll.head.next.next.value).toEqual(2);
      expect(ll.head.next.next.next.value).toEqual(5);
      expect(ll.head.next.next.next.next.value).toEqual(3);
      expect(ll.head.next.next.next.next.next).toEqual(null);
    });
    it('second linked list greater than first linked list ', () => {
      let linkedlistss = new linkedList;
    
      let linkedlisttt = new linkedList;
     
  
      let ll = zip(linkedlistss, linkedlisttt);
      expect(ll).toEqual({head: null, size: 0});
      
    });
  
  });