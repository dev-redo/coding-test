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
