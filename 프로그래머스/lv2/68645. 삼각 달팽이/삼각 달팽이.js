function solution(n) {
    const stack = [...Array(n)].fill().map((_, idx) => Array(idx + 1));
    
    let num = 1;
    let [row, col] = [-1, 0];
    
    for (let i=n; i>0; i-=3) {
        for (let j=0; j<i; j++) { stack[++row][col] = num++; }
        for (let j=0; j<i-1; j++) { stack[row][++col] = num++; }
        for (let j=0; j<i-2; j++) { stack[--row][--col] = num++; }
    }
    
    return stack.flat();
}