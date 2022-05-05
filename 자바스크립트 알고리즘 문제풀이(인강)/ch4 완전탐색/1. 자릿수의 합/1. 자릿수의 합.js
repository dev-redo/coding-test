const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const n = Number(input[0]);
const numbers = input[1].split(" ");

let max = 0;
let answer = "";
for (let el of numbers) {
    const nums = el.split("");
    const sum = nums.reduce((prev, curr) => {
        return Number(prev) + Number(curr)
    }, 0);
    
    if (max < sum) {
        max = sum;
        answer = el;
        continue;
    }
    if (max === sum) {
        answer = isMaxNumber(answer, el);
    }
}
console.log(answer)

function isMaxNumber(n1, n2) {
    return Math.max(n1, n2);
}
