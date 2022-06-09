function solution(orders, courses) {
    var answer = [];
    for (let course of courses) {
        let sH = new Map();
        for (let order of orders) {
            const orderArr = order.split("");
            const comb = getCombinations(orderArr, course);
            comb.forEach(c => {
                const cs = c.sort().join("");
                if (sH.has(cs)) {
                    sH.set(cs, sH.get(cs)+1);
                } else {
                    sH.set(cs, 1);
                }
            });
        }
        let maxVal = 0;
        if (sH.size === 0) continue;
        for (let [_, v] of sH) {
            if (maxVal < v) {
                maxVal = v;
            }
        }
        for (let [k,v] of sH) {
            if (v !== 1 && maxVal === v) {
                answer.push(k);
            }
        }
    }
    return answer.sort();
}

const getCombinations = (array, selectNum) => {
    const result = [];
    if (selectNum === 1) return array.map((element) => [element]);
    array.forEach((fixed, index, origin) => {
        const restCombinations = getCombinations(origin.slice(index + 1), selectNum - 1);
        const attached = restCombinations.map((restCombination) => [fixed, ...restCombination]);
        result.push(...attached);
    });
    return result;
}