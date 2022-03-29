function solution(nums) {
    let answer = 0;
    let arrLen = nums.length;
    const primeArr = makePrime();
    
    for (let i = 0; i < arrLen - 2; i++) {
        for (let j = i+1; j < arrLen - 1; j++) {
            for (let k = j+1; k < arrLen; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                (primeArr[sum]) && answer++;
            }
        }
    }
    return answer;
}

function makePrime () {
    const numArr = new Array(3001);
    for (let i = 1; i <= 3000; i++) {
        numArr[i] = i;
    }
    for (let i = 2; i**2 <= 3000; i++) {
        if (numArr[i] === 0) continue;
        for (let j = i**2; j <= 3000; j+= i) {
            numArr[j] = 0;
        }
    }
    return numArr;
}