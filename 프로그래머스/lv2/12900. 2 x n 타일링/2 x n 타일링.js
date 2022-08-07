function solution(n) {    
    const memo = Array(n).fill(0);
    memo[0] = 1;
    memo[1] = 2;
    
    for (let i=2; i<n; i++) {
        memo[i] = (memo[i-1] + memo[i-2]) % 1000000007;
    }
    
    return memo[n-1];
}

// 풀이: dp
// 점화식: memo[i] = memo[i-1] + memo[i-2]