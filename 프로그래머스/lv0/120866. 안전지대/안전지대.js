function solution(board) {
    let safeArea = 0;

    const boardLen = board.length;
    for (let i=0; i<boardLen; i++) {
        for (let j=0; j<boardLen; j++) {
            const isDangerousArea = 
                  (board[i][j] === 1) || // 지뢰 자신
                  (board[i-1] && board[i-1][j] === 1) || // 위
                  (board[i+1] && board[i+1][j] === 1) || // 아래
                  (board[i] && board[i][j-1] === 1) || // 좌
                  (board[i] && board[i][j+1] === 1) || // 우
                  (board[i-1] && board[i-1][j-1] === 1) || // 대각선 왼위
                  (board[i-1] && board[i-1][j+1] === 1) || // 대각선 오위
                  (board[i+1] && board[i+1][j-1] === 1) || // 대각선 왼아래
                  (board[i+1] && board[i+1][j+1] === 1);   // 대각선 오아래       
            
            if (!isDangerousArea) { safeArea += 1; }
        }
    }
    
    return safeArea;
}

// Input
// - board: 지뢰 O = 1, X = 0인 n * n 배열

// Output
// - 안전한 칸 수

// 지뢰와 지뢰에 인접한 위,아래,좌,우, 대각선이 모두 위험한 지역일 시, 안전한 칸 수 return

// Algorithm Flow
// 1. board length 구한다.
// 2. board length만큼 2중 loop
// 3. 현재 칸이 위험지역인지 여부를 판별한다.
//    - 지뢰 + 위아래좌우대각선 중 하나라도 1일 시 위험 지역
// 4. 위험지역이 아니라면 safeArea + 1