function solution(s) {
    let answer = s.length;
    
    for(i = 1 ; i <= Math.floor(s.length / 2); i++) {
        let sentence = "";
        let last = 0;
        while(last < s.length) {
           let cnt = 1;
           while(s.slice(last,last+i) === s.slice(last+i,last+i+i)) {
                 cnt++;
                 last = last+i; 
           }
           if(cnt > 1) {
                sentence = sentence + cnt;               
           }
            sentence = sentence + s.slice(last,last+i);
            last = last+i;
        }
        answer = Math.min(answer, sentence.length);
    }
    return answer;
}