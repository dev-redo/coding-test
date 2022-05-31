const n = 6;
const nums = [13, 5, 11, 7, 23, 15];
console.log(solution(n, nums));

function solution(n, nums) {
    for (let i=1; i<n; i++) {
        let x = nums[i];
        let j = i-1;
        while (j>=0 && nums[j] > x) {
            nums[j+1] = nums[j];
            j -= 1;
        }
        nums[j+1] = x;
    }
    return nums;
}
