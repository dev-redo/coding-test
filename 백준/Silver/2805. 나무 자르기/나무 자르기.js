const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [NM, trees] = input.map((el) => el.split(" ").map((val) => +val));
const [N, M] = NM;

trees.sort((a,b) => a-b);

function binarySearch(arr, M, start, end) {
    let answer = Number.MIN_SAFE_INTEGER;
    while(start <= end) {
        let mid = Math.floor((start+end) / 2);
        let sumTree = arr.reduce((prev, curr) =>{
            let cutTree = curr - mid;
            return prev = (cutTree > 0) && (prev + cutTree)
        }, 0);
        if (sumTree >= M) {
            if (mid > answer) answer = mid;
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return answer;
}

console.log(binarySearch(trees, M, 0, trees[trees.length - 1]));