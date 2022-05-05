const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const [n,m] = input.shift();
const tests = input.map(line => line.split(" ").map(el => Number(el)));

const pair = [];
for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) {
        pair.push([i,j]);
    }
}

let cnt = 0;
for (const [mento, menti] of pair) {
    let isPossible = true;
    for (const test of tests) {
        const mentoIdx = test.indexOf(mento);
        const mentiIdx = test.indexOf(menti);
        if (mentoIdx >= mentiIdx) {
            isPossible = false;
            break;
        }
    }
    if (isPossible) cnt++;
}

console.log(cnt);
