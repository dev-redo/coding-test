const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);
const dp = [1, 3].concat(new Array(N - 1).fill(0));

for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i-2]*3 + (dp[i-1] - dp[i-2])*2) % 9901;
}

console.log(dp[N]);