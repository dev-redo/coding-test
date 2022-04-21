const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const N = Number(input[0]);
const parsed = input[1].split(" ").map(el => Number(el));
console.log(N, parsed)

const answer = [];
let min = Number.MIN_SAFE_INTEGER;
for (let el of parsed) {
    if (min < el) {
        answer.push(el);
        min = el;
    }
}

console.log(answer.length);
