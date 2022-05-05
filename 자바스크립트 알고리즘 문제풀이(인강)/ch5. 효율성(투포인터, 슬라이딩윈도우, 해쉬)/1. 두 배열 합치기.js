const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const parsed = input.map(el => el.split(" ").map(el => Number(el)));

const { 1: arr1, 3: arr2 } = parsed;
const n = arr1.length;
const m = arr2.length;

let p1 = p2 = 0;
const answer = [];
while (p1<n && p2<m) {
    if (arr1[p1] < arr2[p2]) {
        answer.push(arr1[p1++]);
        continue;
    }
    answer.push(arr2[p2++]);
}

while (p1 < n) answer.push(arr1[p1++]);
while (p2 < m) answer.push(arr2[p2++]);

console.log(answer);
