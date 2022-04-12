const readline = require('readline');
const input = [];

readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (line) => {
    input.push(line.split(' ').map(elem => +elem));
}).on('close', () => {
    solution();
    process.exit();
});


class Tree {
    constructor(n) {
        this.parent = new Array(n+1)
            .fill(0)
            .map((_, i) => i);
    }
    union(n1, n2) {
        const a = this.find(n1);
        const b = this.find(n2);
        if (a < b) this.parent[b] = a;
        else this.parent[a] = b;
    }

    find(node) {
        if (this.parent[node] === node) {
            return node;
        }
        this.parent[node] = this.find(this.parent[node]);
        return this.parent[node];
    }
}

function solution() {
    const [N, M] = input.splice(0, 2).flat();
    const tree = new Tree(N);
    const edge = input.splice(0, N);
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (edge[i-1][j-1] === 1) tree.union(i, j)
        }
    }
    
    const path = input.flat();
    let check = true;
    for (let i = 1; i < M; i++) {
        const n1 = tree.find(path[i-1]);
        const n2 = tree.find(path[i]);
        if (n1 !== n2) {
            check = false;
            break;
        }
    }
    const answer = check ? "YES" : "NO";
    console.log(answer)
}