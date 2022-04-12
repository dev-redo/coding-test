const input = require('fs').readFileSync('/dev/stdin').toString()
const X = Number(input)

function dp(n, memo=[0,0]) {
    let i = 2;
    while (i <= n) {
        memo[i] = memo[i-1] + 1;
        if (i % 3 === 0) {
            memo[i] = Math.min(memo[i], memo[i/3] + 1);
        }
        if (i % 2 === 0) {
            memo[i] = Math.min(memo[i], memo[i/2] + 1);
        }
        i++;
    }
    return memo[n];
}

console.log(dp(X));