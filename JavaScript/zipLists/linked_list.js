const linkedListMaster2 = require('../../data-structure/linked_list');
const linkedClass = linkedListMaster2.ll;


function zip(linkedlist1, linkedlist2) {

  let current = linkedlist1.head;
  let current2 = linkedlist2.head;

  let arr = [];
  let llf = new linkedClass;
  let count1 = (linkedlist1.size)
  let count2 = (linkedlist2.size)
  let count;


  if (count1 < count2) {
    count = count2


  } else {
    count = count1
  }

  while (count) {
    count--

    if (count1 > count2 && current2 === null) {
      arr.push(current.value)
      current = current.next

    } else if (count2 > count1 && current === null) {
      arr.push(current2.value);
      current2 = current2.next


    }
    else {


      arr.push(current.value);
      current = current.next

      arr.push(current2.value)
      current2 = current2.next
    }

  }


  arr.map((ele, idx) => {

    llf.append(ele)

  })

  return llf;
}

module.exports = {zip:zip}