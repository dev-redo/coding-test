function solution(number, k) {
    const answer = [];
    
    for (let num of number) {
        while (k > 0 && answer[answer.length - 1] < num) {
            answer.pop();
            k -= 1;
        }
        answer.push(num);
    }
    
    // 히든케이스(테케 12): number = 777, k = 1
    // return answer.join("");
    return answer.join("").slice(0, number.length - k);
}