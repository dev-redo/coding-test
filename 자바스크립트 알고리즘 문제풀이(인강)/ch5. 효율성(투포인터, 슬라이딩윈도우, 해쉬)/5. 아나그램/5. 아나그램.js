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
    const map1 = mapStr(s1);
    for (let x of s2) {
        if (!map1.has(x) || map1.get(x) === 0) {
            return "NO";
        }
        map1.set(x, map1.get(x) - 1);
    }
    return "YES";
}

const s1 = 'abaCC';
const s2 = 'Caaab';
console.log(solution(s1, s2));
