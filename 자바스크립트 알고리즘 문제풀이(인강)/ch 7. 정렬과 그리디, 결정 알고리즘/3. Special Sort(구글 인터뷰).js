// 내 풀이: flag 변수를 두고 변수 swipe
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

// 강사님 풀이: 버블솔트
// arr[i]가 양수고 arr[i+1]이 음수면 -> 서로 위치 변경
let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>0 && arr[j+1]<0){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}
