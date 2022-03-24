const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [T, ...test] = input;

let maxCase = dp(Math.max(...test));

function dp(n, memo=[0,1,2,4]){  
  if(n <= 4){
    return memo[n-1];
  }
  let i = 4;
  while(i <= n){
    memo[i] = (memo[i-1] + memo[i-2] + memo[i-3])%1000000009;
    i++;
  }
  return memo;
}

const answer = [];
test.map(el => {
    answer.push(maxCase[el]);
})

console.log(answer.join("\n"));