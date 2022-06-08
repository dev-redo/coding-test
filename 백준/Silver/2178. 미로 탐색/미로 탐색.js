const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0,-1);
const NM = input.shift().split(" ");
const [r,c] = NM.map(el => Number(el));
const board = input.map(s => s.split("").map(el => Number(el)));

const dx=[1, 0, -1, 0];
const dy=[0, 1, 0, -1];

function solution(r,c,board) {
    const queue = [];
    const dist = [...Array(r)].map(() => Array(c).fill(-1));
    dist[0][0] = 0;
    
    let cnt = 0;
    for (let i=0; i<r; i++) {
        for (let j=0; j<c; j++) {
            const cell = board[i][j];
            if (cell === 0 || dist[i][j] > 0) continue;
            queue.push([i,j,dist[i][j]]);
            while(queue.length) {
                const [x, y, cnt] = queue.shift();
                for (let k=0; k<4; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
                    if (dist[nx][ny] >= 0 || board[nx][ny] !== 1) continue;
                    dist[nx][ny] = cnt + 1;
                    queue.push([nx,ny,dist[nx][ny]]);
                }
            }
        }
    }
    return dist[r-1][c-1] + 1;
}

console.log(solution(r,c,board));
