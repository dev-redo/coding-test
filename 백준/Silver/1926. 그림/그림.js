const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0,-1).map(s => s.split(" "));
const NM = input.shift();
const [n,m] = NM.map(el => Number(el));
const board = input.map(arr => arr.map(el => Number(el)));

const dx=[-1, 0, 1, 0];
const dy=[0, 1, 0, -1];

function solution(n,m,board) {
    const row = m;
    const column = n;
    const queue = [];
    const visited = [...Array(column)].map(() => Array(row).fill(false));
    
    let maxArea = 0;
    let areaCnt = 0;
    
    for (let i=0; i<column; i++) {
        for (let j=0; j<row; j++) {
            const cell = board[i][j];
            if (cell === 0 || visited[i][j]) continue;
            queue.push([i, j]);
            visited[i][j] = true;
            areaCnt += 1;
            
            let area = 0;
            while (queue.length) {
                area += 1;
                const [x, y] = queue.shift();
                for (let k=0; k<4; k++) {
                    const nx = x + dx[k];
                    const ny = y + dy[k];
                    if ( nx < 0 || ny < 0 || nx >= column || ny >= row ) continue;
                    if (visited[nx][ny] || board[nx][ny] !== 1) continue;
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
            maxArea = Math.max(area, maxArea)
        }
    }
    return [areaCnt, maxArea].join("\n");
}


console.log(solution(n,m,board));