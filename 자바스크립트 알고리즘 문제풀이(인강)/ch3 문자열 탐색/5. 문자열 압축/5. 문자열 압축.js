const input = require('fs').readFileSync('/dev/stdin').toString().split('').slice(0, -1);

let answer = "";
let cnt = 1;

for (let i=0; i<input.length; i++) {
    const curr = input[i] || '';
    const next = input[i+1] || '';
    if (curr === next) cnt++;
    else {
        const str = (cnt > 1) ? curr + String(cnt) : curr;
        answer += str
        cnt = 1;
    }
}

console.log(answer);
