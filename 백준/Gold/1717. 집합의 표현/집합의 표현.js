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
    const arr = new Array(n+1);
    for (let i = 0; i <= n; i++) {
        arr[i] = i
    }
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
  else {
      let parent = getParent(arr, arr[n]);
      arr[n] = parent;
      return parent
  }
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