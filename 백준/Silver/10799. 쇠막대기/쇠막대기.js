const input = require('fs').readFileSync('/dev/stdin').toString().slice(0, -1);
console.log(solution(input));

function solution(str) {
    let answer = 0;
    const stack = [];
    for (let i=0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push('(');
            continue;
        }
        stack.pop();
        if (str[i-1] === '(') answer += stack.length;
        else answer += 1;
    }
    return answer;
}