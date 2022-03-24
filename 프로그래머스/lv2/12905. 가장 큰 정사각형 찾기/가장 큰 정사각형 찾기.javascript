function solution(board) {
    let answer = 0;
    const row = board.length;
    const column = board[0].length;
    if ((row === 1 || column === 1) && [...board].flat().includes(1)) {
        return 1;
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (board[i][j] >= 1) {
                const diagonal = board[i-1][j-1];
                const left = board[i][j-1];
                const up = board[i-1][j];
                const min = Math.min(diagonal, left, up);
                board[i][j] = min + board[i][j];
                answer = Math.max(answer, board[i][j]);
            }
        }
    }
    return answer ** 2;
}