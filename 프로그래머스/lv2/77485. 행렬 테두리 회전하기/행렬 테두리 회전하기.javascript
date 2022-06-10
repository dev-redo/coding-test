// x = 열, y = 행
function solution(rows, columns, queries) {
    const answer = [];
    const board = [...Array(rows)].map(() => [...Array(columns)].fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            board[i][j] = (i * columns) + (j+1);
        }
    }
    
    for (let query of queries) {
        const minNum = rotation(board, query);
        answer.push(minNum);
    }
    
    return answer;
}

function rotation(board, query) {
    let [x1,y1,x2,y2] = query;
    x1 -=1; y1 -=1; x2 -=1; y2 -=1;

    let temp = board[x1][y1]; // 8
    let minNum = Number.MAX_SAFE_INTEGER;
    
    for (let i=x1; i < x2; i++) {
        const moveCell = board[i+1][y1];
        board[i][y1] = moveCell;
        minNum = Math.min(minNum, moveCell);
    }
    for (let i=y1; i < y2; i++) {
        const moveCell = board[x2][i+1];
        board[x2][i] = moveCell;
        minNum = Math.min(minNum, moveCell);
    }
    for (let i=x2; i > x1; i--) {
        const moveCell = board[i-1][y2];
        board[i][y2] = moveCell;
        minNum = Math.min(minNum, moveCell);
    }
    for (let i=y2; i > y1; i--) {
        const moveCell = board[x1][i-1];
        board[x1][i] = moveCell;
        minNum = Math.min(minNum, moveCell);
    }
    board[x1][y1+1] = temp;
    minNum = Math.min(minNum, temp);
    return minNum;
}