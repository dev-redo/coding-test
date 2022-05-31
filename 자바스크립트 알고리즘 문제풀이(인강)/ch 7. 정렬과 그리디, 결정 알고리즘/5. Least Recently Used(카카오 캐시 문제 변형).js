// 내 풀이
const s = 5;
const nums = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(s, nums));

function solution(s, nums) {
    const answer = [...Array(s)].fill(0);
    nums.forEach(n => {
        const idx = answer.indexOf(n);
        // 존재하지 않을 시 -> cache miss
        if (idx === -1) {
            answer.pop();
            answer.unshift(n);
        }
        // 존재할 시 -> cahce hit
        else {
            const sp = answer.splice(idx, 1);
            answer.unshift(...sp);
        }
    })
    return answer;
}


// 강사님 풀이: 삽입정렬
const size = 5;
const nums = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(size, nums));

function solution(size, nums) {
    const cache = [...Array(size)].fill(0);
    nums.forEach(x => {
        let pos = -1;
        for (let i=0; i<size; i++) {
            // 현재 작업이 cache에 존재 -> cache hit
            if (x === answer[i]) {
                pos = i;
            }
        }
        // cache miss
        if (pos === -1) {
            for (let i=size-1; i>=1; i--) {
                answer[i] = answer[i-1];
            }
        }
        else {
            for (let i=pos; i>=1; i--) {
                answer[i] = answer[i-1];
            }
        }
        answer[0] = x;
    })
    
    return nums;
}
