const meets = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
];

console.log(solution(meets));

function solution(meets) {
    let cnt = 0;
    // 끝나는 시간이 동일할 시 -> 시작 시간 정렬
    // 다를 시 -> 끝나는 시간 정렬
    meets.sort((x,y) => {
        const [xc, xe] = x;
        const [yc, ye] = y;
        
        if (xe === ye) return xc-yc;
        return xe-ye;
    });
    
    let et = 0;
    for (let m of meets) {
        const [mc, me] = m;
        if (mc >= et) {
            cnt += 1;
            et = me;
        }
    }
    return cnt;
}
