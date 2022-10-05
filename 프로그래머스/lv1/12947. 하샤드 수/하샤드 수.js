function solution(x) {
    const arr = x.toString().split("");
    let sum = arr.reduce((pre, cur) => pre + parseInt(cur, 10), 0);
    return (x % sum === 0) ? true : false;
}