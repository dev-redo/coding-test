function solution(begin, end) {
  const arr = new Array(end - begin + 1).fill(0);
  
  for(let i = begin; i <= end; i++) {
    arr[i-begin] = getMaxDivisor(i);
  }
  
  if (begin === 1) arr[0] = 0;
  
  return arr;
}

// 자기자신을 제외한 배수
// 이때 X1에 배치할 수 있는 가장 큰 블록의 넘버를 구해야 한다.
// 이는 X1의 약수 중에서 자기 자신을 제외한 가장 큰 약수이다.

const getMaxDivisor = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if ( n % i === 0 && n / i <= 1e7 ) {
      return n / i;
    }
  }

  return 1;
}
