// 그래프 구현
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    depthFirstSearch(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        const adjacencyList = this.adjacencyList;
        
        while(queue.length !== 0) {
            const currVertex = queue.shift();
            result.push(currVertex);
            adjacencyList[currVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    this.adjacencyList[neighbor].sort((a,b) => a-b);
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1)
const parsed = input.map(el => el.split(" ").map(target => Number(target)));

const [N, M, V] = parsed.shift();
const edge = parsed;

// 그래프 생성
const graph = new Graph();
// 그래프 정점 추가
for (let i = 1; i <= N; i++) {
    graph.addVertex(i);
}
// 그래프 간선 넣기
for (let i = 0; i < M; i++) {
    const [v1, v2] = edge[i];
    graph.addEdge(v1,v2);
}

// 각 정점에 연결된 정점들 오름차순 정렬
Object.values(graph.adjacencyList).map(el => el.sort((a,b) => a-b));

// DFS, BFS 결과
const answer = [];
answer.push(graph.depthFirstSearch(V).join(" "));
answer.push(graph.breadthFirstSearch(V).join(" "));

console.log(answer.join("\n"));