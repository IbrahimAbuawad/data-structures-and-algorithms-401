class Stack{
  constructor(){
    this.top = null;
  }

  push(node){
    if(!this.top){
      this.top = node;
      return;
    }else{
      node.next = this.top;
      this.top = node;
      return;
    }
  }

  pop(){
    if(!this.top){
      return 'exception';
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp;
  }

  peek(){
    if(this.top){
      return this.top.value;
    }
    return ('exception');
  }
}

class PseudoQueue{
  constructor(){
    this.front = new Stack();
    this.back = new Stack();
  }
  enqueue(value){
    this.back.push(value);
    return this;
  }


  dequeue(){
    while(this.back.top){
      let temp = this.back.pop();
      this.front.push(temp);
    }
    let final = this.front.pop();
    while(this.front.top){
      let temp = this.front.pop();
      this.back.push(temp);
    }
    return final.value;
  }
}

module.exports = PseudoQueue;