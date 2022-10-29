function solution(n, k) {
    const convertedN = n.toString(k);
    
    const numRegex = /0+/;
    const splitedConvertedN = convertedN.split(numRegex);
    
    const positiveIntegerArr = splitedConvertedN
            .filter(num => num !== '')
            .map(num => Number(num));
    
    return positiveIntegerArr.reduce((primeCnt, currInt) => {
        if (isPrime(currInt)) return primeCnt += 1;
        return primeCnt;
    }, 0);
}

function isPrime(num) {
    if (num === 1) return false;
    if (num === 2) return true;
  
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) {
            return false; 
        }
    }
    return true; 
}

// 1. 양의 정수 n을 k진수로 변환 ✅
// 2. 변환한 수에서 0이 아닌 숫자들을 얻기 ✅
//    2.1. 0이 1개 이상 있는지 찾는 정규표현식 구현 = /0+/
//    2.2. 정규표현식으로 split을 해 0이 아닌 숫자들을 구하기
//      -> 얻어낸 문자를 숫자로 변환해야 한다.
//      case1. '' = 처음과 끝이 0 -> 얻고자 하는 숫자가 아니므로 제거
//      case2. ''이 아닌 문자 = 숫자로 변환
// 3. 얻은 숫자들을 이용해 loop돌리면서 소수 판별 ✅
// 4. @return 소수인 숫자 개수 ✅

// 소수판별 로직
// 1. 1은 소수X
// 2. 2는 소수X
// 3. 2부터 n의 제곱근까지의 수까지 나누어지는 수가 있는지 판별
//  3.1. 존재 => 소수X
//  3.2. 존재X => 소수
//  WHY? => num의 제곱근보다 작은 수에서 나눠지는 수가 안나온다면 num의 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없기 때문