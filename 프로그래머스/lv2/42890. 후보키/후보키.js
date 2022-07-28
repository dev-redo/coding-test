function solution(relation) {
    const keys = [];
    let idxArr = Array.from(Array(relation[0].length), (_, i) => i);
    
    for (let i = 0 ; i < idxArr.length ; i++) {
        const combinations = getCombinations(idxArr, i + 1);
        for (const attrComb of combinations) {
            if (isMinimal(keys, attrComb) && isUnique(relation, attrComb)) {
                keys.push(attrComb);
            }
        }
    }
    return keys.length;
}

// 조합 구하기: 백트래킹
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

// 최소성 구하기
function isMinimal(keys, attrComb) {
    for (const key of keys) {
        if (key.every(attr => attrComb.includes(attr))) {
            return false;
        }
    }
    return true;
}

function isUnique(relation, attrIndexComb) {
    let result = Array.from(Array(relation.length), x => '');
    for (const attrIndex of attrIndexComb) {
        relation.forEach((row, rowIndex) => result[rowIndex] += row[attrIndex]);
    }
    return result.length === [...new Set(result)].length
}