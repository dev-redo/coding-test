// 내 풀이(BAD) - 투포인터 (O(N^2))
function solution(n, k, nums) {
    let answer = 0;
    const len = n-1;
    
    let s = 0;
    let e = s + (k-1);
    while (e <= len) {
        let sum = 0;
        for (let i=s; i<=e; i++) {
            sum += nums[i];
        }
        answer = Math.max(answer, sum);
        s += 1;
        e += 1;
    }
    return answer;
}

const n = 10;
const k = 3;
const nums = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(n, k, nums));


// 강사님 풀이(GOOD) - 슬라이딩 윈도우 (O(N))
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
