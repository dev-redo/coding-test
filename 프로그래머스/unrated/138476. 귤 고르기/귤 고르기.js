function solution(k, tangerines) {
    const tangerineObj = tangerines.reduce((tangerineObj, tangerine) => {
        tangerineObj[tangerine] = (tangerineObj[tangerine] ?? 0) + 1;
        return tangerineObj;
    }, {});
    
    const sortedTangerines = Object.values(tangerineObj).sort((prevTangerine, currTangerine) => currTangerine - prevTangerine);
    
    let tangerineKindsCnt = 0,
        tangerineTemp = 0;

    for (const tangerine of sortedTangerines) {
        tangerineKindsCnt += 1;
        tangerineTemp += tangerine;
        if(tangerineTemp >= k) return tangerineKindsCnt;
    }
}

// input
// 1. 귤 개수 k
// 2. 귤 리스트 tangerines 

// output
// 귤 k개 판매시 귤의 크기가 서로 다른 개수를 최소화시 -> 귤 크기 개수

// Algorithm Flow
// 1. tangerines에서 귤의 크기에 대한 개수가 저장된 객체 생성 = tangerineObj
// 2. tangerineObj를 개수에 대해 내름차순 정렬 = sortedTangerines
//    -> 최대한 귤의 크기가 서로 다른 개수를 "최소화"하기 위함
// 3. k가 0이 될 때까지 귤 종류를 담는다.
//  - 귤 크기 종류 cnt = tangerineKindsCnt, 귤을 담는 상자 = tangerineTemp
//  - sortedTangerines에 대해 loop돌리기
//      - tangerineKindsCnt + 1
//      - tangerineTemp + 현재 귤 개수
//      - tangerineTemp가 k 이상일 시 귤을 다 담은 것이므로 종료