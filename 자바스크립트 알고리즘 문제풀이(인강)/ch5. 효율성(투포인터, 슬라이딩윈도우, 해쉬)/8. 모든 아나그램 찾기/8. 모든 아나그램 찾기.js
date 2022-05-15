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
