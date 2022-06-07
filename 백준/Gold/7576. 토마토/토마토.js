const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(s => s.split(" ")).slice(0,-1);
const NM = input.shift();
const [n,m] = NM.map(el => Number(el));
const board = input.map(s => s.map(el => Number(el)));

const dx=[1, 0, -1, 0];
const dy=[0, 1, 0, -1];

function solution(row,col,board) {
    const q = [];
    const dist = [...Array(col)].map(() => Array(row).fill(0));
    for (let i=0; i < col; i++) {
        for (let j=0; j < row; j++) {
            // 익은 토마토일 시 queue에 넣어 주변 익지않은 토마토 탐색
            if (board[i][j] === 1) {
                q.push([i,j]);
            }
            // 익지 않은 토마토일 시
            if (board[i][j] === 0) {
                dist[i][j] = -1;
            }
        }
    }
    let head = 0;
    // 익은토마토만 q에 있음
    while (q.length > head) {
        const [x,y] = q[head++];
        for (let k=0; k<4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
            // 익은 토마토 / 빈칸일시 넘어가기
            if (dist[nx][ny] >= 0) continue;
            // 익지않은 토마토에 대해 +1
            dist[nx][ny] = dist[x][y] + 1;
            // 주변 토마토 탐색
            q.push([nx,ny]);
        }
    }
    
    // 토마토가 익을 때까지의 최소 날짜 출력
    let day = 0;
    for (let i=0; i < col; i++) {
        for (let j=0; j < row; j++) {
            // 익지 않은 토마토가 있음
            if (dist[i][j] === -1) return -1;
            day = Math.max(day, dist[i][j]);
        }
    }
    return day;
}

console.log(solution(n,m,board));