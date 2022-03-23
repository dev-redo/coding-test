const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const inputNumber = input[1].split(" ");

let answer = inputNumber.map(el => el.toString())
                    .sort((a,b) => (b+a) - (a+b)).join("");

console.log(answer[0]==='0'? '0' : answer);