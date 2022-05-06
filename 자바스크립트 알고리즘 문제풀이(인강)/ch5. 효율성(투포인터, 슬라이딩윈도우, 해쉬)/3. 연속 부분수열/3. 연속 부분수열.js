const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const parsed = input.map(el => el.split(" ").map(el => Number(el)));

const [n, m] = parsed[0];
const nums = parsed[1];

let s = 0;
let answer = 0;
let sum = 0;
for (let e=0; e<n; e++) {
    if (sum === m) answer++;
    sum += nums[e];
    while (sum > m) {
        sum -= nums[s++];
    }
}

console.log(answer);
