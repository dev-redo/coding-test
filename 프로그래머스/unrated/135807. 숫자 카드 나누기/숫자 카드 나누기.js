function solution(arrayA, arrayB) {
    return Math.max(getA(arrayA, arrayB), getA(arrayB, arrayA));
}

function getA(arrayA, arrayB) {
    let answer = 0;
    arrayA.forEach(val => answer = gcd(answer, val));

    if(arrayB.some(val => val % answer === 0)) return 0;
    return answer;
}

const gcd = (num1, num2) => {
  let r = num1 % num2;
  return num2 === 0 ? num1 : gcd(num2, r);
};