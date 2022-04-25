const input = require('fs').readFileSync('/dev/stdin').toString().slice(0, -1);
const parsed = input.toUpperCase();

const strLen = parsed.length - 1;
let isSymmetry = true;
for (let i = 0; i < Math.floor(strLen / 2); i++) {
    let front = parsed[i];
    let rear = parsed[strLen-i];
    if (front !== rear) {
        isSymmetry = false;
        break;
    }
}

console.log(isSymmetry ? "Yes" : "NO")
