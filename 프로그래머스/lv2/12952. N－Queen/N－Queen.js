function solution(n) {
    const board = Array(n + 1);
    let count = 0;
    
    nqueen(0); // 첫 번째 행부터 queen 배치 시작
    
    function isPositionSafe(cdx) {
        // queen 배치 실패 케이스
        // 1. 같은 열일 시
        // 2. 대각선상에 있을 시
        for (let i=0; i<cdx; i++) {
            const onDiagonal = cdx - i === Math.abs(board[cdx] - board[i]);
            const onStraight = board[cdx] === board[i];
            
            if (onDiagonal || onStraight) {
                return false;
            }
        }

        return true;
    }
    
    function nqueen(cdx) { // 배치할 queen의 행
        // cdx를 마지막까지 수행한 경우 
        // -> 모든 행에 대해 배치 완료 & 모든 queen에 대해 조건 성립
        if (cdx === n) {
            count += 1;
            return;
        }
        
        // 모든 queen이 조건에 성립하는지 체크
        for (let i=0; i<n; i++) {
            board[cdx] = i; // cdx 행, i번째 열 queen 배치
            if (isPositionSafe(cdx)) { // 위 queen 배치했을 때, 배치된 queen들에 대해 아직 조건이 성립한다면
                nqueen(cdx + 1); // 그 다음 행에 대해 queen 배치
            }
        }
    }
    
    return count;
}