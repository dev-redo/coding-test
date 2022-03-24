const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [T, ...test] = input;

const memo = [0, 1, 2, 4];

function dp(n) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = dp(n-1) + dp(n-2) + dp(n-3);
    return memo[n];
}
dp(10);

const answer = test.map(el => {
    return memo[el];
})

console.log(answer.join("\n"))