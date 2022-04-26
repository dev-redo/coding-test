const input = require('fs').readFileSync('/dev/stdin').toString().slice(0, -1).toLowerCase();

const regExp = /[^a-z]/g;

const parsed = input.replace(regExp, '');
const reverse = Array.from(parsed).reverse().join('');

console.log(parsed === reverse ? "YES" : "NO");
