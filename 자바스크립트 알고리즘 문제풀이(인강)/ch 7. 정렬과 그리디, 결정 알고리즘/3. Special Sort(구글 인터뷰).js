const n = 8;
const nums = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(n, nums));

function solution(n, nums) {
    let idx = 0;
    let len = nums.length - 1;
    for (let i=0; i<len ; i++) {
        if (nums[i] < 0) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            idx += 1;
        }
    }
    return nums;
}
