const input = require('fs').readFileSync('/dev/stdin').toString();
const target = Number(input);

// 소수 배열 만들기
const isPrime = makePrime(target);
const primeArr = [];

for (let i = 2; i <= isPrime.length; i++) {
    if (isPrime[i]) primeArr.push(i)
}

function makePrime(n) {
    const numArr = new Array(n+1).fill(true);
    for (let i = 2; i ** 2 <= n; i++) {
        if (numArr[i] === 0) continue;
        for (let j = i ** 2; j <= n; j += i) {
            numArr[j] = false;
        }
    }
    return numArr;
}

// 경우의 수 구하기
let [left, right] = [0,0];
let sum = 0;
let answer = 0;

while (left <= right) {
    if (sum < target) {
        sum += primeArr[right++];
        continue;
    }
    if (sum === target) answer++;
    sum -= primeArr[left++];
}

console.log(answer);