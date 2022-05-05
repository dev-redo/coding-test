const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const parsed = input.map(el => el.split(" "))

const [n,k] = parsed[0].map(el => Number(el));
const cards = parsed[1].map(el => Number(el));

function findSum(arr) {
    const set = new Set();
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            for (let k=j+1; k<n; k++) {
                const sum = cards[i] + cards[j] + cards[k];
                set.add(sum);
            }
        }
    }
    return Array.from(set);
}


const answer = findSum(cards).sort((a,b) => b-a);
console.log(answer[k-1]);
