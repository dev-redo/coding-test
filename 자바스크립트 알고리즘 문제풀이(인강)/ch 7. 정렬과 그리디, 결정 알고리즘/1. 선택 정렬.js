const n = 6;
const nums = [13, 5, 11, 7, 23, 15];
console.log(solution(n, nums));

function solution(n, nums) {
    for (let i=0; i<n; i++) {
        let min = i;
        for (let j=i+1; j<n; j++) {
            if (nums[min] > nums[j]) {
                min = j;
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]];
    }
    return nums;
}
