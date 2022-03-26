const input = require('fs').readFileSync('/dev/stdin').toString();

class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
     return this.arr.length === 0;
  }
}

const stack = new Stack();
let res = 0;

for (let i = 0; i < input.length; i++) {
    const target = input[i];
    // target이 열린 괄호일 시
    if ((target === '(') || target === '[' ) {
        stack.push(target);
    }
    // target이 ')'일 시
    else if (target === ')') {
        // stack이 비어있거나, stack top이 '['이면 실패
        if (stack.isEmpty() || stack.peek() === '[') {
            res = 0;
            break;
        }
        // stack top이 '('일 시 2를 스택에 더해준다
        if (stack.peek() === '(') {
            // top '(' 없애기
            stack.pop();
            stack.push(2); // 2넣기
        }
        // stack top이 ']'일 시
        // stack에서 '('를 찾아서 곱셈
        else {
            let num = 0;
            while (stack.arr.length > 0) {
                let top = stack.pop();
                // '('일 시
                if (top === '(') {
                    stack.push(num * 2);
                    break;
                }
                // 숫자일 시
                else {
                    num += top;
                }
            }
        }
    }
    // target이 ']'일 시
    else if (target === ']') {
        // stack이 비어있거나, stack top이 '('이면 실패
        if (stack.isEmpty() || stack.peek() === '(') {
            res = 0;
            break;
        }
        // stack top이 '['일 시(맞는 짝) 3을 스택에 더해준다
        if (stack.peek() === '[') {
            // top '[' 없애기
            stack.pop();
            stack.push(3); // 3넣기
        }
        // stack top이 ')'일 시
        // stack에서 '['를 찾아서 곱셈
        else {
            let num = 0;
            while (stack.arr.length > 0) {
                let top = stack.pop();
                // '['일 시
                if (top === '[') {
                    stack.push(num * 3);
                    break;
                }
                // 숫자일 시
                else {
                    num += top;
                }
            }
        }
    }
    
    else {
        const isNumber = (curr) => (typeof curr === 'number');
        if (!stack.arr.every(isNumber)) {
            res = 0;
            break;
        }
        res = stack.arr.reduce((a,b) => (a+b), 0);
    }
}

console.log(res);