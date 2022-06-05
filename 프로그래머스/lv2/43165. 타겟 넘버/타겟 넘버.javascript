function solution(numbers, target) {
    let n = numbers.length;
    let answer = 0;
    
    const dfs = (idx, result) => {
        if (idx === n) {
            if (result === target) {
                answer += 1;
            }
        }
        else {
            dfs(idx + 1, result + numbers[idx]);
            dfs(idx + 1, result - numbers[idx]);
        }
    }
    
    dfs(0,0);
    return answer;
}