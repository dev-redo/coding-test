function solution(n, t, m, p) {
    let answer = '';
    let num = 0, binary = '';
    
    while (binary.length < t * m) {
        binary += (num.toString(n).toUpperCase());
        ++num;
    }
    
    for (let i = p - 1; i < t * m; i += m) {
        answer += binary[i];
    }
    
    return answer;
}

// n = 진법, t = 미리 구할 숫자의 개수, m = 게임에 참가하는 인원, p = 튜브 순서