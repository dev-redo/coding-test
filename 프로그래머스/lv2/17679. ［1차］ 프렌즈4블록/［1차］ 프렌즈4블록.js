function solution(m, n, board) {
    board = board.map((v) => v.split(""));
    
    while (true) {
        const find = [];
        
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
        
        if (!find.length) {
          return [].concat(...board).filter((v) => !v).length;
        }

        find.forEach(([y,x]) => {
            board[y][x] = 0;
            board[y][x+1] = 0;
            board[y+1][x] = 0;
            board[y+1][x+1] = 0;
        })

        for (let i=m-1; i>0; i-=1) {
            if (!board[i].some(v => !v)) continue;

            for (let j=0; j<n; j++) {
                for (let k=i-1; k>=0 && !board[i][j]; k-=1) {
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