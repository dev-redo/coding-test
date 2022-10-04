function solution(x, n) {
    const answer = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = x * (i+1);
    }
    return answer;
}