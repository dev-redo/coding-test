function solution(citations) {    
    // 1. 내림차순 정렬
    citations.sort((prev, curr) => curr - prev);
    
    // 2. position <= f(position)가 되는 x의 최댓값
    let i = 0;
    while (i + 1 <= citations[i]) {
        i += 1;
    }
    
    return i;
}

// 위키백과 설명

// Formally, if f is the function that corresponds to the number of citations for each publication, we compute the h-index as follows:

// 1. First we order the values of f from the largest to the lowest value.
// 해석: f의 값을 가장 큰 값에서 가장 낮은 값으로 정렬한다.

// 2. Then, we look for the last position in which f is greater than or equal to the position (we call h this position).
// 해석: f가 위치보다 크거나 같은 마지막 위치를 찾기

// 예시: 10 8 5 4 3
// 4번째 출판물의 인용 횟수가 4회이므로 h-index는 4