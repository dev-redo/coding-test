const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, 1);
const parsed = input[0].split(" ");

const [str, c] = parsed;

let pos = 0;
const charPosArr = [];

while (true) {
    let foundPos = str.indexOf(c, pos);
    if (foundPos === -1) break;
    charPosArr.push(foundPos);
    pos = foundPos + 1;
}

const answer = [];
for (let i=0; i<str.length; i++) {
    const distances = charPosArr.map(c => Math.abs(i-c));
    answer.push(Math.min(...distances));
}

console.log(answer.join(" "))
