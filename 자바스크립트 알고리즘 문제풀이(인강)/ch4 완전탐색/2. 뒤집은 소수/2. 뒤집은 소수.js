const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const n = Number(input[0]);
const parsed = input[1].split(" ");

const numbers = parsed.map(el => {
    const reverse = el.split("").reverse().join("");
    return Number(reverse);
})

const answer = numbers.filter(el => isPrimeNumbers(el));
console.log(answer);


function isPrimeNumbers(n) {
    if (n < 2) return false;
    for (let i=2; i**2 < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
