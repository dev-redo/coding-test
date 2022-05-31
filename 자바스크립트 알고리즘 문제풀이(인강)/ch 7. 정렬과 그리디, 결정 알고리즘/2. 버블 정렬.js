const n = 6;
const nums = [13, 5, 11, 7, 23, 15];
console.log(solution(n, nums));

function solution(n, nums) {
    for (let pass=0; pass < n; pass++) {
        for (let i=0; i < n-pass; i++) {
            if (nums[i] > nums[i+1]) {
                let a = nums[i];
                let b = nums[i+1];
                
                nums[i] = b;
                nums[i+1] = a;
            }
        }
    }
    return nums;
}
