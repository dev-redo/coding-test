const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const N = Number(input[0]);
const parsed = input[1].split(" ").map(el => Number(el));
let answer = 0;

let score = 0;
for (let el of parsed) {
    if (el === 1) {
        score += 1;
        answer += score;
    }
    else {
        score = 0;
    }
}

console.log(answer);
