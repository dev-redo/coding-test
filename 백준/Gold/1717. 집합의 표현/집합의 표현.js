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
//정답 코드
const input = [];
const readline = require("readline");
readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line.split(' ').map((n) => +n));
  })
  .on("close", () => {
    solve();
    process.exit();
  });

class Tree {
  constructor(n) {
    this.parent = Array(n + 1)
      .fill(0)
      .map((_, i) => i);
  }

  union(n1, n2) {
    const a = this.find(n1);
    const b = this.find(n2);
    this.parent[b] = a;
  }

  find(node) {
    if (this.parent[node] === node) {
      return node;
    }
    this.parent[node] = this.find(this.parent[node]);
    return this.parent[node];
  }
}

const solve =() =>{
  const [n, m] = input[0];
  input.shift();
  const tree = new Tree(n);
  let answer = "";
  for (let i = 0; i < m; ++i) {
    const [a, b, c] = input[i];
    if (a === 0) {
      tree.union(b, c);
    } else {
      if (tree.find(b) === tree.find(c)) {
        answer += "YES\n";
      } else {
        answer += "NO\n";
      }
    }
  }
  console.log(answer);
}
