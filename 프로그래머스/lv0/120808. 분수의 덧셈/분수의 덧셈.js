function solution(denum1, num1, denum2, num2) {
    const denominator = num1 * num2,
          numerator = denum1 * num2 + denum2 * num1;
    
    const gcd = getGcd(denominator, numerator);
    return [numerator / gcd, denominator / gcd];
}


const getGcd = (a, b) => {
    if (b == 0) return a;
    return getGcd(b, a % b);
}