const input = require('fs').readFileSync('/dev/stdin').toString();
const N = Number(input);

const DP = new Array(N+1);

for (let i = 0; i < DP.length; i++) {
    DP[i] = new Array(10).fill(1);
}

for (let i = 1; i <= N; i++) {
	for (let j = 8; j >= 0; j--) {
		DP[i][j] = (DP[i][j+1] + DP[i-1][j]) % 10007;
	}
}

console.log(DP[N][0]);