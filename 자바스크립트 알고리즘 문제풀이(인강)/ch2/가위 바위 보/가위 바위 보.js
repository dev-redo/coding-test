const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1).map(el => el.split(" "));
const N = Number(input.shift());
const parsed = input.map(arr => arr.map(target => Number(target)));
const [A, B] = parsed;

const answer = [];

for (let i = 0; i < N; i++) {
    if(A[i]===B[i]) {
        answer.push("D");
        continue;
    }
    if(A[i]===1 && B[i]===3 || A[i]===2 && B[i]===1 || A[i]===3 && B[i]===2) answer.push("A");
    else answer.push("B");
}

console.log(answer.join("\n"));
