const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const t = Number(input.shift());

function solution(str) {
    const arr = str.split('');
    const stack = [];
    for(let x of str){
        if(x==='(') stack.push(x);
        else{
            if(stack.length===0) return "NO";
            stack.pop();
        }
    }
    if (stack.length > 0) return 'NO';
    return 'YES';
}

const answer = input.reduce((prev, curr)=> {
    return prev += `${solution(curr)}\n`
}, '');
console.log(answer);
