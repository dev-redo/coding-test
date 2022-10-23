
// Cache miss = 참조값이 cache에 존재X = 새로운 작업
// -> 모든 작업이 뒤로 밀리고 새로운 작업은 캐시의 맨 앞에 위치
// -> 맨 마지막 작업 제거 (= queue의 pop) & 새로운 작업 unshift
// EX. 23167 - 5 작업 -> 52316

// Cache hit = 참조값이 cache에 존재O = 기존 작업
// -> 해당 작업을 제거한 후 맨 앞으로 위치
// EX. 52316 - 3 작업 -> 35216

function solution(cacheSize, cities) {
    let cache = []; // queue
    if (cacheSize === 0) return 5 * cities.length;
    
    let time = 0;
    for (const city of cities) {
        const cityLC = city.toLowerCase();
        
        // cache의 index
        // -1 = cache miss // -1 X = cache hit
        const cityIdx = cache.indexOf(cityLC);
        
        // cache miss = 참조값이 cache에 존재 X = +5
        if (cityIdx === -1) {
            // 캐시 초과시 pop
            if (cache.length >= cacheSize) cache.pop();
            cache.unshift(cityLC);
            time += 5;
            
            continue;
        }
        
        // cache hit = 참조값이 cache에 존재 O = +1    
        cache.splice(cityIdx, 1);
        cache.unshift(cityLC);
        time += 1;
    }
    
    return time;
}