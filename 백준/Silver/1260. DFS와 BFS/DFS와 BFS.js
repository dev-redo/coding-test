const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);

let [N, M, V] = input[0].split(" ").map(Number);
let graph =  [...Array(N+1)].map(()=>[]);

for (let i = 1; i <= M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

// DFS
const visited_dfs = new Array(N + 1).fill(false);
const answer_dfs = [];

function dfs(V) {
    if (visited_dfs[V]) return;
    answer_dfs.push(V);
    visited_dfs[V] = true;
    graph[V].forEach((next) => {
        if (visited_dfs[next] === false) {
            dfs(next);
        }
    })
}

dfs(V);
console.log(answer_dfs.join(" "));

// // BFS
const visited_bfs = new Array(N + 1).fill(false);
const answer_bfs = [];

function bfs(V) {
    const queue = [V];
    while (queue.length) {
        const curr = queue.shift();
        if (visited_bfs[curr] === true) continue;
        visited_bfs[curr] = true;
        answer_bfs.push(curr);
        graph[curr].forEach((next) => {
            if (visited_bfs[next] === false) {
                queue.push(next);
            }
        })
    }
}

bfs(V);
console.log(answer_bfs.join(" "));