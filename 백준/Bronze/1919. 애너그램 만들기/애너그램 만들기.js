function mapStr(str) {
    const map = new Map();
    for (let x of str) {
        if (map.has(x)) {
            map.set(x, map.get(x)+1);
            continue;
        }
        map.set(x, 1);
    }
    return map;
}

function solution(s1, s2) {
    const n = s1.length + s2.length;
    
    const map1 = mapStr(s1);
    const map2 = mapStr(s2);
    let difference = 0;
    for (let [k,v] of map1) {
        if (map2.has(k)) {
            difference += (Math.min(map1.get(k), map2.get(k))*2);
        }
    }
    return n - difference;
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const s1 = input[0];
const s2 = input[1];
console.log(solution(s1,s2));