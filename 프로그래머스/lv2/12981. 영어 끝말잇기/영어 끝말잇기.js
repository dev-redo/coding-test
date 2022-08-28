function solution(n, words) {
    let turn = 1;
    for (let i=1; i<words.length; i+=1) {
        // 통과 조건
        // 1. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말하기
        // 2. 이전에 등장했던 단어는 사용하지 않기
        const pass = (words[i][0] === words[i-1][words[i-1].length-1]) && !(words.slice(0,i).includes(words[i]));
        if (i % n === 0) { turn += 1 } // turn이 바뀌었을 때 += 1
        
        if (!pass) {
            return ([i % n + 1, turn]);
        }
    }
    
    return [0,0];
}