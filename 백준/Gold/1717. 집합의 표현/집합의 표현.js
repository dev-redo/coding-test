// 1. 배열 풀이
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

function solution() {
    const [n,m] = input.shift();

    const answer = [];
    const arr = new Array(n+1).fill(0).map((_, i) => i);
    for (let el of input) {
        if (el[0] === 0) {
            unionParent(arr, el[1], el[2])
        }
        else {
            const test_result = findParent(arr, el[1], el[2]);
            answer.push(test_result);
        }
    }
    
    console.log(answer.join("\n"))
}

function getParent(arr, n) {
  if (arr[n] === n) return n;
  return (arr[n] = getParent(arr, arr[n]));
}

function unionParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);
  if (a < b) arr[b] = a;
  else arr[a] = b;
}

function findParent(arr, a, b) {
  a = getParent(arr, a);
  b = getParent(arr, b);

  if (a === b) return "YES";
  else return "NO";
}


// 2. 트리 풀이
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
    const [n,m] = input.shift();
    const tree = new Tree(n);

    const answer = [];
    for (let el of input) {
        const [a, b, c] = el;
        if (a === 0) {
            tree.union(b, c)
        }
        else {
            if (tree.find(b) === tree.find(c)) {
                answer.push("YES");
            } else {
                answer.push("NO")
            }
        }
    }
    console.log(answer.join("\n"))
}
