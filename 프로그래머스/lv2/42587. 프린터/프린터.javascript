// 1. 인쇄 대기 목록 가장 앞의 문서 J를 대기 목록에서 꺼내기
//      1-1. J가 가장 높은 우선순위 문서일 시 제거
//      1-2. 아닐 시 push

// J가 요청한 문서(idx)일 시 몇 번째로 인쇄되었는지(cnt) return
function solution(priorities, location) {
    let cnt = 0;
    const docs = priorities.map((p, idx) => [p, idx]);
    
    outer: while (!!docs.length) {
        let maxPriority = 0;
        for (let doc of docs) {
            const [p, idx] = doc;
            maxPriority = Math.max(maxPriority, p);
        }
        inner: while (true) {
            const doc = docs.shift();
            const [p, idx] = doc;
            // J가 가장 높은 우선순위 문서일 시
            // 만약 J가 요청한 문서일 시 -> return cnt
            if (p === maxPriority) {
                cnt += 1;
                if (idx === location) return cnt;
                break inner;
            }
            // 아닐 시 push
            docs.push(doc);
        }
    }
    
    return cnt;
}