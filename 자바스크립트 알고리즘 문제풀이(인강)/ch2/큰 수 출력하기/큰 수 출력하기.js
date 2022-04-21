const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const N = Number(input[0]);
const parsed = input[1].split(" ").map(el => Number(el));
console.log(N, parsed)

const answer = [];

for (let i = 0; i < N; i++) {
    const curr = parsed[i] || 0;
    const prev = parsed[i-1] || 0;
    if (prev < curr) {
        answer.push(curr);
    }
}

console.log(answer.join(" "));
