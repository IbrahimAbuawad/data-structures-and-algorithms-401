function bracketValidation(string) {
    if (typeof string !== 'string') {
      return null;
    }
  
    let stack = [];
    let map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
        stack.push(string[i]);
      } else if (string[i] === ')' || string[i] === '}' || string[i] === ']'){
        let top = stack.pop();
        if (string[i] !== map[top]) {
          return false;
        }
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
  }
  
  module.exports = bracketValidation;