function solution(n) {
    const stack = [...Array(n)].fill().map((_, idx) => Array(idx + 1)); // 달팽이
    
    let num = 1; // 각 요소에 들어갈 값
    let [row, col] = [-1, 0];
    
    // 달팽이 채우기
    for (let i=n; i>0; i-=3) {
        for (let j=0; j<i; j++) { stack[++row][col] = num++; } // 왼쪽 아래
        for (let j=0; j<i-1; j++) { stack[row][++col] = num++; } // 오른쪽 가로
        for (let j=0; j<i-2; j++) { stack[--row][--col] = num++; } // 왼쪽 위
    }
    
    return stack.flat();
}