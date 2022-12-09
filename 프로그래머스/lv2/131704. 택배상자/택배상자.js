// - stack 문제 (= 후입선출)
function solution(order) {
    // 0. cnt = 트럭에 싣은 상자 개수
    let cnt = 0;
    
    // subStack = 보조 컨베이어
    // orderLen = 상자 개수
    const 
        subStack = [],
        orderLen = order.length;
    
    // flag = 택배기사가 원하는 상자 순서 중 고려하고자 하는 상자 index
    let flag = 0;
    // 1. 반복문을 돌리면서 1부터 n까지 상자를 가져온다.
    //    - 반복문 = 컨베이어 밸트
    //    - count num = 상자 번호
    for (let box=1; box<=orderLen; box++) {
        // 2. 상자 번호가 택배 기사님이 원하시는 번호가 아니라면 subStack에 추가 후 continue
        if (box !== order[flag]) {
            subStack.push(box);
            continue;
        }
        
        // 3. 상자 번호가 기사님이 원하시는 번호라면 
        //    - cnt += 1
        //    - 반복문 안의 반복문을 또 이용하여 subStack loop돌리기
        //      - subStack에 택배 기사님이 원하시는 택배 상자가 존재하는지 확인
        //      - 존재한다면 해당 상자를 subStack에서 pop -> cnt += 1
        cnt += 1, flag += 1;
        while (subStack.length > 0 && order[flag] === subStack[subStack.length - 1]) { 
            subStack.pop();
            cnt += 1, flag += 1;
        }
    }
    
    return cnt;
}

// 조건
// - 컨베이어 벨트에 1~n까지의 상자가 오름차순으로 영재에게 전달
// - 택배 기사님이 원하는 순서(= order)대로 트럭에 실어야 한다.
// - 컨베이어 벨트에 온 상자가 택배 기사님이 원하는 순서가 아니면 보조 컨베이어 벨트에 저장
// - 보조 컨베이어 벨트에는 영재가 가장 최근에 넣은 상자부터 꺼낼 수 있음 (후입선출 => stack)
// - 택배 기사가 원하는 순서의 상자가 보조 컨베이어 안쪽에 있을 때 더 이상 꺼내기 불가능
// - 더 이상 꺼낼 수 없을 때 "싣기" 종료
// - 트럭에 싣은 상자 개수 return

// Algorithm Flow
// - stack 문제 (= 후입선출)
// 0. cnt = 트럭에 싣은 상자 개수 / subStack = 보조 컨베이어 / orderLen = 상자 개수
// 1. 반복문을 돌리면서 1부터 n까지 상자를 가져온다.
//    - 반복문 = 컨베이어 밸트
//    - count num = 상자 번호
// 2. 상자 번호가 택배 기사님이 원하시는 번호가 아니라면 subStack에 추가 후 continue
//    -> continue 이유 = 컨베이어 벨트(= )가 상자 번호를 만족하지 않았으면, 이전에 들어온 번호(= subStack에 있는 번호들)들도 상자 번호를 만족하지 않음
// 3. 상자 번호가 기사님이 원하시는 번호라면 
//    - cnt += 1
//    - 4번 수행
// 4. 반복문 안의 반복문을 또 이용하여 subStack loop돌리기
//    - subStack에 택배 기사님이 원하시는 택배 상자가 존재하는지 확인
//    - 존재한다면 해당 상자를 subStack에서 pop -> cnt += 1
// 5. return cnt;