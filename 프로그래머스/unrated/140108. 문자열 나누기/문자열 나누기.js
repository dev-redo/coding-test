function solution(s) {
    let answer = 0;
    const xy = [0,0];
    
    while (s.length > 0) {
        let slicedIdx = 0;
        for (let idx=0; idx<s.length; idx++) {
            s[0] === s[idx] ? xy[0] += 1 : xy[1] += 1;
            if (xy[0] === xy[1]) {
                slicedIdx = idx + 1;
                break;
            }
        }
        answer += 1;
        s = s.slice(slicedIdx);
        if (!slicedIdx) break;
    }
    
    return answer;
}

// Algorithm Flow
// 1. xy = x,y의 개수를 저장하는 stack, answer = 분해된 문자열 개수
// 2. s를 자르는 작업을 해야하므로 while (s.length) loop
// 3. 현재 s length만큼 loop돌리면서 x,y 개수를 구함
//  - if x === y -> 현재 elem 위치만큼 자르기 / break
// 4. for loop가 종료되었다면 그 다음 작업 수행
//  - answer += 1
//  - elem 위치만큼 slice
//  - elem 위치가 0일 시, 더 이상 읽을 글자가 없는 것이기에 while문 break;