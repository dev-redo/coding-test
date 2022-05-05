const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const [n,m] = input.shift();
const gifts = input.map(line => line.split(" ").map(el => Number(el)));

let answer = 0;
for (let i=0; i<n; i++) {
    let cnt = 0;
    let money = m;
    money -= (gifts[i][0] /2) + (gifts[i][1]);
    for (let j=0; j<n; j++) {
        if (i===j) continue;
        if (money <= gifts[j][0] + gifts[j][1]) cnt++;
        else break;
    }
    answer = Math.max(answer, cnt);
}

console.log(answer)
