function solution(n) {
    if (n === 1) return 1;
    
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let sum = 0
        for (let j = i; j <= n; j++) {
            sum += j
            if (sum >= n) {
                if (sum === n) answer++
                break
            }
        }
    }
    return answer;
}