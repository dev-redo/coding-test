function solution(p) {
    // 입력이 빈 문자열일 경우 반환
    if (p.length === 0) return p;
    
    let [pos, correct] = parse(p); // u의 마지막 idx, 올바른 괄호문자열 판별 불리언
    let u = p.slice(0, pos); // u
    let v = p.slice(pos); // v
    
    // 3. 올바른 괄호 문자열일 시
    if (correct) {
        return u + solution(v);
    }
    
    // 4. 올바른 괄호 문자열이 아닐 시
    let answer = '(' + solution(v) + ')';
    // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙이기
    for (let i=1; i<u.length-1; i++) {
        if (u[i] === '(') {
            answer += ')';
        }
        else {
            answer += '(';
        }
    }
    return answer;
}

// 문자열 p를 두 균형잡힌 괄호 문자열 u, v로 분리
// u = 더 이상 분리할 수 없음 -> 최소 단위의 균형잡힌 괄호 문자열
// 균형잡힌 문자열 = (와 )의 개수 동일
function parse(str) {
    let correct = true; // u가 올바른 문자열인지 판별
    let left = 0, right = 0; // (와 ) 개수
    const stack = [];
    
    for (let i=0; i<str.length; i++) {
        if (str[i] === '(') {
            left += 1;
            stack.push(str[i]);
        }
        else {
            right += 1;
            // 짝이 안 맞음 -> 올바른 괄호 문자열 X
            if (stack.length === 0) {
                correct = false;
            }
            else {
                stack.pop();
            }
        }
        // 균형잡힌 문자열일 시
        if (left === right) {
            // [u 문자열 끝 idx, 올바른 괄호문자열 판별]
            return [i+1, correct];
        }
    }
}