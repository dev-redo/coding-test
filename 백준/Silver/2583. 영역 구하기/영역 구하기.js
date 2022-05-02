const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const NMK = input.shift().split(" ");
const [N, M, K] = NMK.map(el => Number(el));
const rect = input.map(el => el.split(" "));

const graph = new Array(M).fill(0).map(() => new Array(N).fill(0));
const visited = new Array(M).fill(false).map(() => new Array(N).fill(false));

let cnt;
const area = [];
const dx=[-1, 0, 1, 0];
const dy=[0, 1, 0, -1];


function dfs(x,y) {
    visited[x][y] = true;
    cnt++
    for (let k=0; k<4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= 0 && ny >= 0 && nx < M && ny < N && !visited[nx][ny] && graph[nx][ny] !== 1) {
            dfs(nx, ny)
        }
    }
}


for (let i=0; i<K; i++) {
    const arr = rect[i].map(el => Number(el));
    const [x1,y1, x2,y2] = arr;
    for (let j=x1; j<x2; j++) {
        for (let k=y1; k<y2; k++) {
            graph[j][k] = 1;
            visited[j][k] = true;
        }
    }
}

for (let i=0; i<M; i++) {
    for (let j=0; j<N; j++) {
        if (graph[i][j] === 0 && !visited[i][j]) {
            cnt = 0;
            dfs(i,j);
            area.push(cnt);
        }
    }
}

const sorted_area = area.sort((a,b) => a-b);
const area_cnt = area.length;

console.log(area_cnt);
console.log(sorted_area.join(" "));