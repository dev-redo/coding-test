// 풀이
// 1. 모든 부분집합을 구하기
// 2. 부분집합 중에서 유일성과 최소성을 만족하는 부분집합을 남기기
// 3. 남겨진 부분집합의 개수를 구하기
function solution(relation) {
    const keys = []; // 유일성과 최소성을 만족하는 부분집합을 담는 배열
    
    // 컬럼을 숫자로 변환 -> [0,1,2,3]
    let idxArr = Array.from(Array(relation[0].length), (_, i) => i);
    
    // 가능한 모든 조합을 검사
    for (let i = 0 ; i < idxArr.length ; i++) {
        const combinations = getCombinations(idxArr, i + 1); // [ [ 0 ], [ 1 ], [ 2 ], [ 3 ] ]
        // 부분집합이 유일성과 최소성 통과할 시 배열에 추가
        for (const attrComb of combinations) {
            if (isMinimal(keys, attrComb) && isUnique(relation, attrComb)) {
                keys.push(attrComb);
            }
        }
    }
    return keys.length;
}

function getCombinations(arr, k) {
    const answer = [];
    const comb = [...Array(k)].fill(0);
    backTracking(answer, comb, arr, k, 0, 0);
    return answer;
};

function backTracking(answer, comb, arr, k, idx, start) {
    if (idx === k) {
        return answer.push([...comb]);
    }
    
    for (let i=start; i<arr.length; i++) {
        comb[idx] = arr[i];
        backTracking(answer, comb, arr, k, idx+1, i+1);
    }
}

// 최소성 판별
// 유일성과 최소성을 갖춘 keys의 부분집합을 포함하는지 판별
function isMinimal(keys, attrComb) {
    for (const key of keys) {
        if (key.every(attr => attrComb.includes(attr))) {
            return false;
        }
    }
    return true;
}

// 유일성 판별
// 컬럼에 대해 모든 튜플이 유일성을 갖추는지 판별
function isUnique(relation, attrIndexComb) {
    let result = Array.from(Array(relation.length), x => '');
    for (const attrIndex of attrIndexComb) {
        relation.forEach((row, rowIndex) => result[rowIndex] += row[attrIndex]);
    }
    console.log(result)
    return result.length === [...new Set(result)].length
}