// ex. 1231234, k=3

function solution(number, k) {
    const answer = []; // 숫자들을 넣고 뺄 stack (k만큼 뺄 수 있다)
    
    // 1 -> answer = [1], k=3
    // 2 -> answer = [2], k=2
    // 3 -> answer = [3], k=1
    // 1 -> answer = [3,1], k=1
    // 2 -> answer = [3,2], k=0
    // 3 -> answer = [3,2,3], k=0
    // 4 -> answer = [3,2,3,4], k=0
    for (let num of number) {
        // k 0보다 크고, 이전의 num이 현재의 num보다 작을 때 -> 
        while (k > 0 && answer[answer.length - 1] < num) {
            answer.pop();
            k -= 1;
        }
        answer.push(num);
    }
    
    // return answer.join(""); // -> 안 되는 히든케이스 o
    
    // 히든케이스(테케 12): number = 777, k = 1
    // 이 경우 계속 push만 이루어지므로, 마지막에 자릿수 k만큼 slice해주기
    
    // 777 -> (0,2 ) => 77
    return answer.join("").slice(0, number.length - k);
}