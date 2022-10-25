function solution(n, left, right) {
    var answer = [];
    while (left <= right) {
        const row = Math.floor(left / n);
        const right = left++ % n;
        answer.push(Math.max(row, right) + 1);
    }
    return answer;
}