const times = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
];

console.log(solution(times));

function solution(times) {
    let max = 0;
    
    const tl = [];
    for (let t of times) {
        const [s, e] = t;
        tl.push([s, 's']);
        tl.push([e, 'e']);
    }
    
    tl.sort((x,y) => {
        const [xt, xc] = x;
        const [yt, yc] = y;
        
        if (xt === yt) return xc.charCodeAt() - yc.charCodeAt();
        return xt-yt;
    })
    
    let cnt = 0;
    for (let x of tl) {
        const [xt, xc] = x;
        if (xc === 's') cnt += 1;
        else cnt -= 1;
        
        max = Math.max(max, cnt);
    }
    
    return max;
}
