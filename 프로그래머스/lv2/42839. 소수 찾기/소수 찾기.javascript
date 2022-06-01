const combination = new Set();

function solution(numbers) {
    makeCombination('', numbers);
    
    const combination_arr = Array.from(combination);
    const max_combination = Math.max(...combination_arr);
    
    const primeNumberSieve_of_max = primeNumberSieve(max_combination);
    const combination_primeArr = combination_arr.filter(num => {
        return primeNumberSieve_of_max.includes(num);
    });
    
    return combination_primeArr.length;
}


function makeCombination(comb, others) {
    if (comb !== '') {
        combination.add(Number(comb));
    }
    for (let i=0; i < others.length; i++) {
        const remove_i_others = others.substr(0,i) + others.substr(i+1);
        makeCombination(comb + others[i], remove_i_others);
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