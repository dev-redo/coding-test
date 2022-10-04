function solution(arr) {
    return arr.reduce((pre, cur) => pre + cur, 0)/arr.length;
}