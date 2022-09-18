function solution(s) {
    return convertToBinary(s, 0, 0);
}

const convertToBinary = (s, turnCount, removedCount) => {
    if (s === '1') return [turnCount, removedCount];
    const {removed, count} = removeZero(s);
    return convertToBinary(removed.length.toString(2), turnCount + 1, removedCount + count)
}

const removeZero = s => {
    const removed = s.replaceAll('0', '');
    return {removed, count: s.length - removed.length}
}