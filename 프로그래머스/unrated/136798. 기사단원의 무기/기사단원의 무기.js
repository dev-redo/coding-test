function solution(number, limit, power) {
    let weight = 0;
    
    for (let n=1; n<=number; n++) {
        const divisorsCnt = getDivisorsCnt(n);
        if (divisorsCnt > limit) {
            weight += power;
            continue;
        }
        weight += divisorsCnt;
    }
    
    return weight;
}

const getDivisorsCnt = (num) => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    
    return divisors.length;
}

// Input
// number = 기사 단원 수
// limit = 협약으로 정해진 공격력 제한
// power = 제한 수치를 초과한 기사가 사용할 무기 공격력

// Output
// 무기점의 주인이 무기를 만들기 위해 필요한 철의 무게

// Algorithm Flow
// 0. 철 무게 weight = 0
// 1. number loop 돌리면서 weight 계산
// 2. n의 약수 개수 cnt 구하기
// 3. if cnt > limit === 제한수치 초과 => weight += power
//    else weight += cnt
// 4. return cnt;