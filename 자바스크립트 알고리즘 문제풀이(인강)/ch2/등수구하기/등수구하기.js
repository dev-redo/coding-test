const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const N = Number(input[0]);
const parsed = input[1].split(" ").map(el => Number(el));

const answer = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (parsed[i] < parsed[j]) answer[i] += 1;
    }
}

console.log(answer.join(" "));
