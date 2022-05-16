// 풀이 1. 객체
// 조건 추가: 투표 결과가 동일시 알파벳 순서가 빠른 값을 출력한다.
function solution(n, str) {
    const result = {};
    for (let x of str) {
        if (x in result) {
            result[x] += 1;
            continue;
        }
        result[x] = 1;
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    let answer = '';
    for (let [k, v] of Object.entries(result)) {
        if (v > max) {
            max = v;
            answer = k;
        }
        else if (v === max) {
            if (k < answer) {
                answer = k;
            }
        }
    }
    return answer;
}

const n = 15;
const str = 'BACBACCACCBDEDE';
console.log(solution(n, str));

// 풀이 2. Map
// 조건 추가: 투표 결과가 동일시 알파벳 순서가 빠른 값을 출력한다.
function solution(n, str) {
    const map = new Map();
    for (let x of str) {
        if (map.has(x)) {
            map.set(x, map.get(x)+1);
            continue;
        }
        map.set(x, 1);
    }
    let max = Number.MIN_SAFE_INTEGER;
    let answer = '';
    for (let [k, v] of map) {
        if (v > max) {
            max = v;
            answer = k;
        }
        else if (v === max) {
            if (k < answer) {
                answer = k;
            }
        }
    }
    return answer;
}

const n = 15;
const str = 'BACBACCACCBDEDE';
console.log(solution(n, str));
