const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
let N = Number(input.shift());
const parsed = [...input];

for (let el of parsed) {
    const len = el.length-1;
    for (let i=0; i < len; i++) {
        // 인덱스 i와 i+1 값이 다를 경우
        if (el[i] !== el[i+1]) {
            // 뒤에서 인덱스 i와 동일한 알파벳이 나올 경우
            const test = el.slice(i+2);
            if (test.includes(el[i])) {
                N--;
                break;
            }
        }
    }
}

console.log(N);