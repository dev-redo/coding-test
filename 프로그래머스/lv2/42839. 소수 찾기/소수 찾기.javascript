const permutation = new Set();

function solution(numbers) {
    makePermutation('', numbers);
    
    const permutation_arr = Array.from(permutation);
    const max_permutation = Math.max(...permutation_arr);
    
    const primeNumberSieve_of_max = primeNumberSieve(max_permutation);
    const permutation_primeArr = permutation_arr.filter(num => {
        return primeNumberSieve_of_max.includes(num);
    });
    
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


function primeNumberSieve(n) {
    const arr = new Array(n+1);
  	for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
   	
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue;
        for (let j = i * 2; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    
    const prime = arr.filter(el => el !== 0);
    return prime;
}