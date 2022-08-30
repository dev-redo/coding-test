function solution(people, limit) {
    let cnt = 0; // 배 개수
    people.sort((a,b) => b-a); // 내림차순 정렬
    let [l, r] = [0, people.length-1]; // 투포인터
    
    while (l <= r) {
        const sum = people[l] + people[r]; // 양 끝 사람들 몸무게 합
        if (sum > limit) { // limit를 넘기면
            l += 1; // 가장 큰 수를 더하기
        }
        else { // limit을 넘기지 않으면 양 끝 사람들 태우기
            l += 1;
            r -= 1;
        }
        cnt += 1; // 보트 추가
        // if -> 한 명이 보트 탐, else -> 두 명이 보트 탐
    }
    
    // if (l === r) cnt += 1; // 
    return cnt;
}