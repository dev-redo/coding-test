const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1).map(el => el.split(" "));
const N = Number(input.shift());
const parsed = input.map(arr => arr.map(target => Number(target)));

let sum = {
    "row": 0,
    "column": 0,
    "diagonal": 0
};

// 행렬 합
for (let i=0; i<N; i++) {
    let rowSum = columnSum = 0;
    for (let j=0; j<N; j++) {
        rowSum += parsed[i][j];
        columnSum += parsed[j][i];
    }
    if (rowSum > sum["row"]) sum["row"] = rowSum;
    if (columnSum > sum["column"]) sum["column"] = columnSum;
}

// 대각선 합
let diagonalLeft = diagonalRight = 0;
for (let i=0; i<N; i++) {
    diagonalLeft += parsed[i][i];
    diagonalRight += parsed[N-i-1][i];
}

sum["diagonal"] = Math.max(diagonalLeft, diagonalRight);

let maxSum = Math.max(...Object.values(sum));
console.log(maxSum);
