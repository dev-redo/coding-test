// 튜플
// 1. 중복된 원소 x
// 2. 원소 순서가 다르면 서로 다른 튜플 -> 순열
// 3. 튜플의 원소 개수 유한

function solution(s) {
    const answer = [];
    s = s.replace(/{/g, "[")
         .replace(/}/g, "]");
    const arrayS = JSON.parse(s).sort((next, cur) => next.length - cur.length);
    
    for (let i=0; i<arrayS.length; i++) {
        const curr = arrayS[i];
        for (let j=0; j<curr.length; j++) {
            if (!answer.includes(curr[j])) {
                answer.push(curr[j]);
            }
        }
    }
    
    return answer;
}