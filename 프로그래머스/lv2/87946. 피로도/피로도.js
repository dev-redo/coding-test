
function solution(k, dungeons) {
    const len = dungeons.length;
    
    // 1. visited 배열 만들기
    // -> 던전을 방문하는 순서가 없으므로 dfs를 이용한다
    const visited = new Array(len).fill(false);
    
    let clearCnt = 0; // 방문한 던전
    // 2. 모든 경우의 수(방문순서)를 확인하기 위해 dfs 이용
    const dfs = (k, currCnt) => {
        // 3. 가장 던전을 많이 돈 횟수 구하기
        clearCnt = Math.max(clearCnt, currCnt);
        
        // 던전들 loop돌리기
        for (let i=0; i<len; i++) {
            const [minK, useK] = dungeons[i];
            console.log(i)
            // 최소 필요 피로도에 충족 & 방문 x => 방문할 던전
            if (k >= minK && !visited[i]) {
                visited[i] = true;
                dfs(k - useK, currCnt + 1); // 남은 던전에 대해 dfs 돌리기
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    
    return clearCnt;
}