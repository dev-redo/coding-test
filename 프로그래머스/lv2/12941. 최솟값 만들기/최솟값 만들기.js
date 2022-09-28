function solution(A,B){
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    return A.reduce((acc, cur, idx) => {
        return acc + A[idx] * B[idx]
    }, 0);
}