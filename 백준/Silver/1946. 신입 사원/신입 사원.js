const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const parsed = input.map(str => str.split(' ').map(c => parseInt(c)));

const t = parsed.shift();
const tests = [];

for (let i = 0; i < parsed.length; i++) {
    const line = parsed[i];
    
    if (line.length === 1) {
        const [n] = line;
        tests.push(parsed.slice(i + 1, i + n + 1).sort(([a], [b]) => a - b));
        i += n;
    }
}

const ans = [];

for (let test of tests) {
    let cnt = 0;
    let upper = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < test.length; i++) {
        const [a, b] = test[i];
        
        if (b < upper) {
            cnt += 1;
            upper = b;
        }
    }
    
    ans.push(cnt);
}

console.log(ans.join('\n'));
