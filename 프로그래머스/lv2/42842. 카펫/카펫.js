function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let height=2; height <= Math.sqrt(total); height++) {
        if (total % height !== 0) continue;
        const width = total / height;
        
        if ((width-1)*2 + (height-1)*2 === brown) {
            return [width, height];
        }
    }
}