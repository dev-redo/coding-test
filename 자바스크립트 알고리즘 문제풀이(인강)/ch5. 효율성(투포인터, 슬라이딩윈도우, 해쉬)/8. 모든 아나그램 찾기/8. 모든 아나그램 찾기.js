// Bad 풀이 - 정렬 / 투포인터 이용 O(NM)
function solution(s,t) {
  let answer = 0;
  const s_sort = s.toLowerCase();
  const t_sort = [...t.toLowerCase()].sort().join("");
  const t_len = t.length - 1;
  const s_len = s.length - 1;

  let sp = 0;
  let ep = sp + t_len;
  while (ep <= s_len) {
    let str = [];
  	for (let i=sp; i<=ep; i++) {
    	str.push(s_sort[i]);
    }
    str = str.sort().join("");
    if (t_sort === str) {
    	answer += 1;
    }
    sp += 1;
    ep += 1;
  }
  return answer;
}

const s="bacaAacba";
const t="abc";
console.log(solution(s, t));


---
// 강의 풀이: Hash & Sliding Window && Two Pointers Algorithm - O(N)
const s = 'bacaAacba';
const t = 'abc';
console.log(solution(s,t));

function solution(s, t) {
    const sH = new Map();
    const tH = new Map();
    const t_len = t.length - 1;
    
    // tH hashmap 생성
    for (let i=0; i<t.length; i++) {
        const el = t[i];
        if (tH.has(el)) {
            tH.set(el, tH.get(el)+1);
        } else {
            tH.set(el, 1);
        }
    }
    
    // sH 초기 hashMap 생성
    for (let i=0; i < t_len; i++) {
        const el = s[i];
        if (sH.has(el)) {
            sH.set(el, sH.get(el)+1);
        } else {
            sH.set(el, 1);
        }
    }
    
    // 슬라이딩 윈도우
    let answer = 0;
    let lt = 0;
    for (let rt = t_len; rt < s.length; rt++) {
        const el = s[rt];
        if (sH.has(el)) {
            sH.set(el, sH.get(el)+1);
        } else {
            sH.set(el, 1)
        }
        if (compareMaps(sH, tH)) answer += 1;
        const lk = s[lt];
        sH.set(lk, sH.get(lk)-1);
        if (sH.get(lk) === 0) {
            sH.delete(lk);
        }
        lt += 1;
    }
    return answer;
}

// 두 Map이 일치하는지 판별
function compareMaps(map1, map2) {
    if(map1.size!==map2.size) return false;
    for(let [key, val] of map1){
        if(!map2.has(key) || map2.get(key)!==val) return false;
    }
    return true;
}
