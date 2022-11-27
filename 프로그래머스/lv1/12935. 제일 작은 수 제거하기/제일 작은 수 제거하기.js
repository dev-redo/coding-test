function solution(arr) {
    // 배열 원소가 1개이면 [-1] 리턴
    if (arr.length === 1) return [-1];
    // 배열 원소가 2개 이상인 경우
    else {
        const copy = [...arr];
        let min = copy.sort((a,b) => a-b)[0];
        // 배열의 가장 작은 값을 제거한 배열 리턴 
        const answer = arr.filter(el => el !== min);
        return answer;
    }
}