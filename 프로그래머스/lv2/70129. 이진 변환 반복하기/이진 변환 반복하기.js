function solution(s) {
    return convertToBinary(s, 0, 0);
}

// input: s
// output: 이진변환 횟수, 

// 이진변환: x의 0 제거 => x의 길이를 2진변환
const convertToBinary = (s, turnCount, removedCount) => {
    if (s === '1') return [turnCount, removedCount];
    const {removed, count} = removeZero(s);
    return convertToBinary(removed.length.toString(2), turnCount + 1, removedCount + count)
}

const removeZero = s => {
    const removed = s.replaceAll('0', '');
    return {removed, count: s.length - removed.length}
}