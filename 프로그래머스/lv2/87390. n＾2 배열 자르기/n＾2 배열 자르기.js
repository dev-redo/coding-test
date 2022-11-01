function solution(n, left, right) {
    var answer = [];
    while (left <= right) { // 1. left ~ right 배열 채우기
        const row = Math.floor(left / n); // 행
        const col = left % n; // 열
        answer.push(Math.max(row, col) + 1); // 원소 값 = 둘 중 큰 것 + 1
        
        left += 1;
    }
    return answer;
}