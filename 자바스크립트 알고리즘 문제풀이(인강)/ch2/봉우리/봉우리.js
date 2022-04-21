const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1).map(el => el.split(" "));
const N = Number(input.shift());
const parsed = input.map(arr => arr.map(target => Number(target)));

let answer = 0;

const dx=[-1, 0, 1, 0];
const dy=[0, 1, 0, -1];

for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
        let flag = true;
        for (let k=0; k<4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];
            if(nx>=0 && nx<N && ny>=0 && ny<N && parsed[nx][ny]>=parsed[i][j]){
                flag = false;
                break;
            }
        }
        if(flag) answer += 1;
    }
}

console.log(answer);
