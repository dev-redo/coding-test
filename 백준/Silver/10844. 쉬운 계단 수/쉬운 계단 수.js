const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);

const DP = new Array(N)

for (let i=0; i<N; i++) {
    DP[i] = new Array(10).fill(0)
}

for (let i=1; i<=9; i++) {
    DP[0][i] = 1;
}

for (let i=1; i<N; i++) {
    for (let j=0; j<=9; j++) {
        DP[i][j] = (DP[i-1][j-1] || 0) + (DP[i-1][j+1] || 0) % 1000000000;
    }
}

const result = DP[N - 1].reduce((acc, curr) => {
  return (acc + curr) % 1000000000;
}, 0);

console.log(result);