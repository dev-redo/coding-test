function solution(m, n, board) {
    board = board.map((v) => v.split(""));
    
    // 블록 터트리기
    while (true) {
        const find = []; // 터트릴 블록 좌표
        
        // 터트릴 블록 PUSH
        for (let y=0; y<m-1; y+=1) {
            for (let x=0; x<n-1; x+=1) {
                const pick = board[y][x];
                if (
                    pick &&
                    pick === board[y][x + 1] &&
                    pick === board[y + 1][x] &&
                    pick === board[y + 1][x + 1]
                ) {
                    find.push([y,x]);
                }
            }
        }
        
        // 제거된 블록(= 0) 개수 출력
        if (!find.length) {
          return [].concat(...board).filter((v) => !v).length;
        }
        
        // 터트린 블록을 0(= 빈공간)으로 치환
        find.forEach(([y,x]) => {
            board[y][x] = 0;
            board[y][x+1] = 0;
            board[y+1][x] = 0;
            board[y+1][x+1] = 0;
        })
        
        // 블록을 지운 후 아래로 떨어트리기
        for (let i=m-1; i>0; i-=1) {
            // 현재 row에 빈 공간이 있는지 확인
            // 없으면 그 다음 row로 이동
            if (!board[i].some(v => !v)) continue;
            
            // 있으면 블록을 아래로 이동시키기
            for (let j=0; j<n; j++) {
                for (let k=i-1; k>=0; k-=1) {
                    if (board[i][j]) break; // 현재 값이 빈공간이 아니면 break
                    
                    // 위에 남은 블럭이 있을 시 -> 아래로 이동시키기
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}