function solution(s) {
    if (s.length % 2) return 0;
    let answer = 0;
    
    for (let i=0; i<s.length; i++) {
        const str = s.slice(i) + s.slice(0, i);
        const stack = [];
        
        let flag = 1;
        for (const c of str) {
            if (c === '(' || c === '{' || c === '[') {
                stack.push(c);
                continue;
            }
            const p = stack.pop();
            if (c === ')' && p === '(') continue;
            if (c === '}' && p === '{') continue;
            if (c === ']' && p === '[') continue;
            
            flag = 0;
            break;
        }
        if (flag) answer += 1;
    }
    return answer;
}

// 괄호열을 x만큼 회전시켰을 때, 올바른 문자열이 되는 x의 경우의 수
// 회전 = ex. 12345
// 1만큼 회전: 23451
// 2만큼 회전: 34512

// 올바른 괄호 문자열 x = 문자열이 홀수