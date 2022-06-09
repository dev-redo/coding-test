function solution(orders, courses) {
    const answer = [];
    
    for (let course of courses) {
        const oH = new Map();
        for (let order of orders) {
            backTracking(course, oH, order, 0, '', 0);
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

// backTracking(course, oH, order, 0, '', 0);
function backTracking(end, map, order, idx, str, start) {
    if (idx === end) {
        const comb = str.split('').sort().join('');
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
        backTracking(end, map, order, idx+1, str+ch, i+1);
    }
}