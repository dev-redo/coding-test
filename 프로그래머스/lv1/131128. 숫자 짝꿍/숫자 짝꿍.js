function solution(X, Y) {
    let answer = "";
    const splitedX = X.split("").map(Number);
    const splitedY = Y.split("").map(Number);
    
    for (let idx=9; idx>=0; idx--) {
        const XCntLen = (splitedX.filter(n => n === idx)).length;
        const YCntLen = (splitedY.filter(n => n === idx)).length;
        answer += `${idx}`.repeat(Math.min(XCntLen, YCntLen));
    }
    
    if (answer === "") return "-1";
    if (Number(answer) === 0) return "0";
    return answer;
}

// Input
// X, Y

// Output
// - X, Y에서 겹치는 숫자를 sort한 문자열
// - 예외:
//  - "0"만 있을 경우 -> return "0"
//  - 겹치는 숫자가 없는 경우 === "" -> return "-1"

// Algorithm Flow
// 0. answer = ""
// 1. 9부터 0까지 loop돌리기
// 2. X와 Y에 현재 loop index 개수 구하기
// 3. X 개수 Y 개수 중 가장 작은 값을 answer에 붙이기