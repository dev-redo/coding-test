function solution(arr) {
    return arr.reduce((a,b) => (a * b) / gcd(a, b));
}

// 최대 공약수
const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
};