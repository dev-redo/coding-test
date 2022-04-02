const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const t = +input.shift();

const tests = [];

while (input.length !== 0) {
    const n = Number(input.shift());
    const test = input.splice(0, n).sort();

    let result = "YES";
    for (let i = 1; i < test.length; i++) {
        if (test[i].startsWith(test[i-1])) {
            result = "NO";
            break;
        }
    }
    tests.push(result);
}

console.log(tests.join("\n"));