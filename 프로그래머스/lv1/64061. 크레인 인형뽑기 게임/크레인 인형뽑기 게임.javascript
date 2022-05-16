function solution(board, moves) {
    
    // board 전치행렬 NxN
    for (let i = 0; i < board.length; i++) { 
        for (let j = 0; j < i; j += 1) {
            [board[i][j], board[j][i]] = [board[j][i], board[i][j]];
        }
    }

    // board에서 0을 제거
    const boardFilter = board.map((row) => row.filter((doll) => doll));

    // 뽑은 인형을 담는 상자
    const basket = [];
    
    // 인형 뽑기
    let answer = moves.reduce((point, move) => {
       // 이번에 뽑힌 인형
       const selectDoll = boardFilter[move - 1].shift();
       if (selectDoll) {
            // 이전에 뽑힌 인형과 같을시
            if (selectDoll === basket[basket.length - 1]) {
                // 이전에 뽑힌 인형 제거
                basket.pop();
                // 그리고 점수 +2
                return point += 2;
            }
            // 다를시 이번에 뽑힌 아이템을 상자에 넣기
            basket.push(selectDoll);
       }
       return point;
    }, 0);
    
    return answer;
}