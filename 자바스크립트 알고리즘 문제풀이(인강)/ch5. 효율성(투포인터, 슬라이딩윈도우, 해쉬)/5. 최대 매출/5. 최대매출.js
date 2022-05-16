// 슬라이딩 윈도우 (O(N))
function solution(n, k, nums) {
    let answer = 0;
    let sum = 0;
    for (let i=0; i<k; i++) {
        sum += nums[i];
    }
    answer = Math.max(answer, sum);
    for (let i=k; i<n; i++) {
        sum += (nums[i] - nums[i-k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}

const n = 10;
const k = 3;
const nums = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(n, k, nums));
