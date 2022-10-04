const solution = N => {
    // 1. 인덱스 쪼개기 (문자열)
    const arr = N.toString().split("");
    let answer = 0;
    // 2. 각 인덱스 값을 숫자로 변환한 후 더해주기
    return arr.reduce((pre, cur) => pre + parseInt(cur, 10), 0);
}