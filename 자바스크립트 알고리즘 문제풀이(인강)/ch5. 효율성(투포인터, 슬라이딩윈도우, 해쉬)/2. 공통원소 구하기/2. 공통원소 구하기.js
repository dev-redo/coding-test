const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const parsed = input.map(el => el.split(" ").map(el => Number(el)));

const { 1: arr1, 3: arr2 } = parsed;
const n = arr1.length;
const m = arr2.length;

// 1. filter 이용: O(N^3)
const set1 = arr1.filter(n => arr2.includes(n)).sort((a,b) => a-b);

// 2. 투포인터 이용: O(N)
arr1.sort((a,b) => a-b);
arr2.sort((a,b) => a-b);
let p1=p2=0;
const answer = [];
while(p1<n && p2<m) {
    if (arr1[p1] === arr2[p2]) {
        answer.push(arr1[p1]);
        p1+=1;
        p2+=1;
    }
    else if (arr1[p1] < arr2[p2]) p1+=1;
    else p2+=1;
}

console.log(answer);
