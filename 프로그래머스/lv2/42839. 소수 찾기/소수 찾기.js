// 구현 방법 : 재귀 + 에라토스테네스 체
// 1. numbers 숫자를 재귀 돌려 순열 구하기 (Set을 이용해 중복 제거)
// 2. 나온 순열(permutation) 중 가장 큰 값으로 에라토스테네스 체 구하기
// 3. 에라토스테네스 체에 포함되는 순열들 filter
// 4. return filter된 순열 개수

const permutation = new Set(); // <-

// 123
function solution(numbers) {
    makePermutation('', numbers); // "", 123
    
    const permutation_arr = Array.from(permutation); // [1, 7, 17, 71]
    const max_permutation = Math.max(...permutation_arr); // 71
    
    // max인 값에 대해 에라토스테네스 체 생성 -> 71에 대해서 에라토스테네스의 체
    const primeNumberSieve_of_max = primeNumberSieve(max_permutation);
    // 소수인 값 filter -> 1,7,17,71
    const permutation_primeArr = permutation_arr.filter(num => {
        return primeNumberSieve_of_max.includes(num);
    });
    
    // 소수 개수 return
    return permutation_primeArr.length;
}

function makePermutation(perm, others) {
    if (perm !== '') {
        permutation.add(Number(perm));
    }

    for (let i=0; i < others.length; i++) {
        const remove_i_others = others.substr(0,i) + others.substr(i+1);
        makePermutation(perm + others[i], remove_i_others);
    }
}

// 에라토스테네스 체 로직 -> 71, 1~71
function primeNumberSieve(n) {
	
	// 인덱스에 해당하는 값 채우기, 1~71값
    const arr = new Array(n+1);
  	for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
   	
	// 약수 여부 확인하기 -> 약수를 구할때 -> 자기 자신에 대해서는 체크하지 않습니다
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue;
        for (let j = i * 2; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    
	// 0 <-소수, 0이아닌 값 <- 소수
    // 소수인 값 넣어주기
    const prime = arr.filter(el => el !== 0);
    return prime;
}