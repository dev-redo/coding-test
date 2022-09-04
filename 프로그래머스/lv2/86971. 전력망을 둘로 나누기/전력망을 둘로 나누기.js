// input: 송전탑 tree
// output: 두 전력망의 개수 차이가 가장 작은 case의 절대값
function solution(n, wires) {
    const links = {};
    
    // 1. bfs 인접리스트 생성
    wires.forEach(w => {
        const [a, b] = w;
        if(!links[a]) links[a] = [];
        if(!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    })
    console.log("bfs 인접리스트 :>> ", links);
    
    let answer = Number.MAX_SAFE_INTEGER; // 두 전력망의 개수 차이
    wires.forEach((w, i) => {
        const [a, b] = w;
        const dif = Math.abs(searchTree(links, a,b) - searchTree(links, b,a));
        console.log("두 전력망의 개수 차이 :>> ", dif)
        if (answer > dif) answer = dif;
    })
    return answer;
}

// 2. 전력망 분리 시 root 송전탑에 연결된 전선 개수
const searchTree = (links, root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;
    while(queue.length) {
        const cur = queue.pop();
        links[cur].map(next => {
            if(next !== exception && !visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        })
        count++;
    }
    return count;
}