const HAMBERGER = '1231';

function solution(ingredients) {
    const stack = [];
    return ingredients.reduce((cnt, currInngredient) => {
        stack.push(currInngredient);
        
        if (stack.length >= 4) {
            const find = stack.slice(-4).join("");
            const isHamberger = find === HAMBERGER;
            
            if (isHamberger) {
                [...Array(4)].forEach((_) => {
                    stack.pop();
                });
                cnt += 1;
            }
        }
        
        return cnt;
    }, 0);
}

// Input
// 재료 1,2,3이 들어간 stack
// - 1,2,3은 각각 빵, 야채, 고기
// - 1-2-3-1 순서일 시 햄버거 완성

// Output
// 완성된 햄버거 개수

// 주의 사항
// ingredient 길이가 1,000,000이므로 O(N)으로 solve해야함

// Flow
// 0. 재료를 넣어둘 stack = []
// 1. 재료 list len만큼 loop 돌리기
// 2. 현재 재료에 대해 stack에 push
// 3. 만약 stack 길이가 4 이상일 시 햄버거인지 판별
//  - 현재 stack 최근 4개의 재료 slice
//  - 만약 slice한 재료들이 햄버거일 시 cnt += 1;
// 4. return cnt;