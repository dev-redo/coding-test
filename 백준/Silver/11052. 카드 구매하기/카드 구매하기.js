const input = require('fs').readFileSync('/dev/stdin')
                            .toString().split("\n").slice(0,-1)
                            .map(el => el.split(" "))

const parsed = input.map(target => target.map(el => Number(el)))
const [N] = parsed[0];
const cards = [0, ...parsed[1]];
const DP = new Array(N+1).fill(0);

for(let i=1; i<N+1; i++) {
    for (let j=1; j<=i; j++) {
        DP[i] = Math.max(DP[i], cards[j]+DP[i-j]);
    }
}

console.log(DP[N])