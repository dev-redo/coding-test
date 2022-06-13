function solution(orders, courses) {
    const answer = [];

    for (let course of courses) {
        const oH = new Map();
        for (let order of orders) {
            const orderSort = order.split("").sort().join("");
            backTracking(course, oH, orderSort, 0, '', 0);
        }
        getMaxSet(oH, answer);
    }
    
    return answer.sort();
}

function getMaxSet(map, answer) {
    let maxMapSize = 0;
    for (let v of map.values()) {
        if (maxMapSize < v) {
            maxMapSize = v;
        }
    }
    
    for (let [k, v] of map) {
        if (maxMapSize <= 1) continue;
        if (maxMapSize === v) {
            answer.push(k);
        }
    }
}


function backTracking(end, map, order, idx, comb, start) {
    if (idx === end) {
        if (map.has(comb)) {
            map.set(comb, map.get(comb)+1);
        }
        else {
            map.set(comb, 1);
        }
        return;
    }
    for (let i=start; i<order.length; i++) {
        const ch = order.charAt(i);
        backTracking(end, map, order, idx+1, comb+ch, i+1);
    }
}