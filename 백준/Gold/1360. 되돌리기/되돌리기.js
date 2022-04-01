const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const n = input.shift();
const parsed = input.map(el => el.split(" "));

const arr = [];
let prev;
let now;

for (let i = 0; i < n; i++) {
    let [cmd, val, sec] = parsed[i];
    val = (typeof val === 'number') ? Number(val) : val;
    sec = Number(sec);
    
    // type
    if (cmd === 'type') {
        prev = (arr[i-1]) ? arr[i-1][0] : "";
        now = prev + val;
        arr.push([now, sec]);
        continue;
    }
    
    // undo
    let undoSec = (sec - val - 1);
    let flag = false;
    inner: for (let j = arr.length -1; j >= 0; j--) {
        if (undoSec < 0) break;
        if (arr[j][1] <= undoSec) {
            flag = true;
            arr.push([arr[j][0], sec]);
            break inner;
        }
    }
    if (!flag) {
        now = "";
        arr.push(["", sec]);
    }
}

const result = arr[arr.length - 1][0] ?? "";
console.log(result);