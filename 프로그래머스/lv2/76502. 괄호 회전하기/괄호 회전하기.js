function solution(s) {
    if (s.length % 2) return 0;
    let answer = 0;
    
    for (let i=0; i<s.length; i++) {
        const str = s.slice(i) + s.slice(0, i);
        const stack = [];
        
        let flag = true;
        for (const c of str) {
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
                continue;
            }
            
            const p = stack.pop();
            if (c === ')' && p === '(') continue;
            if (c === '}' && p === '{') continue;
            if (c === ']' && p === '[') continue;
            
            flag = false;
            break;
        }
        if (flag) answer += 1;
    }
    return answer;
}

// 괄호열을 x만큼 회전시켰을 때, 올바른 문자열이 되는 경우의 수
// - 올바른 문자열: 괄호가 모두 짝이 맞음
// ([]) / (}

// 회전 예시
// ex. 12345
// 1만큼 회전: 23451
// 2만큼 회전: 34512

// 문자열이 홀수일 시 => 올바른 문자열 케이스 X

// 1. n만큼의 회전 케이스를 만든 후
// 2. loop를 돌리면서 전부 짝이 맞는지 확인하기
// 3. 회전했을 때 모두 짝이 맞으면 => 올바른 문자열이므로 x + 1
// 4. return x