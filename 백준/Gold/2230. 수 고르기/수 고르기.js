const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const nm = input.shift().split(" ");
const [n,m] = nm.map(el => Number(el));
const parsed = input.map(el => Number(el));

function solution(n,m,arr) {
    const nums = arr.sort((a,b) => a-b);
    let s = e = 0;
    let ans = Number.MAX_VALUE;
    while (s <= e && e < n) {
        const sub = nums[e] - nums[s];
        if (sub < m) {
            e += 1;
            continue;
        }
        if (sub === m) {
            return m;
        }
        ans = Math.min(ans, sub);
        s += 1;
    }
    return ans;
}

console.log(solution(n,m,parsed));