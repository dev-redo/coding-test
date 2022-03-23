const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
class Queue {
    constructor() {
        this.arr = [];
    }
    enqueue(item) {
        this.arr.push(item);
    }
    dequeue() {
        return this.arr.shift();
    }
    front() {
        return this.arr[0];
    }
}
const testCnt = input[0];
for (let i = 1; i < testCnt * 2; i += 2) {
    const q = new Queue();
    let cnt = 0;

    const NM = input[i].split(" ");
    const N = Number(NM[0]); // 문서 개수
    const M = Number(NM[1]); // 찾고자 하는 문서의 인덱스

    const priority = input[i + 1].split(" "); // 문서의 우선순위

    // [문서 인덱스, 문서 우선순위]
    for (let i = 0; i < N; i++) {
        q.enqueue([i, Number(priority[i])]);
    }

    outer: while (true) {
        let maxPriority = 0;
        // maxPrority 구하기
        for (let i = 0; i < q.arr.length; i++) {
            let currPrority = q.arr[i][1];
            if (currPrority > maxPriority) {
                maxPriority = currPrority;
            }
        }
        while (true) {
            const currItem = q.front();
            const currIdx = currItem[0];
            const currPrority = currItem[1];
            // front가 가장 높은 우선순위일 시
            if (maxPriority === currPrority) {
                cnt++;
                q.dequeue();
                // 정답일 시
                if (currIdx === M) {
                    console.log(cnt);
                    break outer;
                }
                // 그 다음 원소로 넘어가기
                break;
            } else {
                q.dequeue();
                q.enqueue(currItem);
            }
        }
    }
}