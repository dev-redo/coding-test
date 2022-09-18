function solution(s) {
    const removeZero =  s.replaceAll('0', '');
    return removeZero.length.toString(2)
}