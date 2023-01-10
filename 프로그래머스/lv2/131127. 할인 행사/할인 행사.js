function solution(want, number, discount) {        
    const isMatch = (discountForTenDay) => {
        const discountMap = discountForTenDay.reduce((discountMap, product) => {
            const currProductCnt = discountMap.get(product) || 0;
            discountMap.set(product, currProductCnt + 1);

            return discountMap;
        }, new Map());

        for (let idx=0; idx<wantLen; idx++) {
            const wantProductCnt = discountMap.get(want[idx]),
                  needProductCnt = number[idx];
            
            const isCurrProductPurchase = discountMap.get(want[idx]) !== number[idx];
            if (isCurrProductPurchase) return false;
        }

        return true;
    }
    
    let buyingDayCnt = 0;
    const wantLen = want.length,
          discountIdx = discount.length - 10;
    
    for (let idx=0; idx<=discount.length - 10; idx++) {
        const discountForTenDay = discount.slice(idx, idx+10);
        if (isMatch(discountForTenDay)) buyingDayCnt += 1;
    }
    
    return buyingDayCnt;
}

// Input
// - 1 ≤ want의 길이 = number의 길이 ≤ 10
// - 10 ≤ discount의 길이 ≤ 100,000

// Ouput
// 회원등록시 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜 cnt

// 주의 사항
// - 비교 시 원하는 제품의 개수보다 할인중인 제품의 개수가 더 많은 경우 -> 불가능한 날짜
//  - 예시로 총 개수가 10개이고, 원하는 제품 개수가 할인중인 제품 개수보다 많으면(ex. 각각 3, 4) => 다른 제품들을 못사기에 불가능

// Algorithm Flow
// Input
// - want = 원하는 제품 이름이 담긴 배열
// - discount = XYZ에서 할인하는 제품 배열 -> 하루 한 개씩 할인
// - number = 원하는 제품 개수

// - 정현이는 10일간의 회원자격으로 할인 제품을 구매하려고 한다.
// 0. 0부터 discount.length -10까지 loop를 돌리면서 10일 동안의 할인받을 수 있는 물품 개수를 센다
// 1. 10일동안의 할인 물품 개수를 세고, 원하는 제품의 개수들을 전부 살 수 있는지 체크한다.
//  - 모든 물품이 원하는 number 개수만큼만 사야한다 
//      -> 전부 동일 시 true
//      -> 아닐 시 false
// 2. 1번을 충족하는 케이스들의 개수를 return한다.