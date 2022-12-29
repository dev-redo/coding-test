const WORDS = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    let answer = 0;
    for (let word of babbling) {        
        for (let idx=0; idx<WORDS.length; idx++) {
            word = word.replaceAll(WORDS[idx], "O");
        }
        
        const wordBabble = [...word.split('')
                .reduce((set, elem) => {
                    set.add(elem);
                    return set;
                }, new Set())];
        const isWordBabble = wordBabble.length === 1 && wordBabble[0] === 'O';
        
        if (isWordBabble) { answer += 1; }
    }
    
    return answer;
}

// "aya", "ye", "woo", "ma" 만 발음 가능
// return input으로 주어지는 babbling에서 발음 가능한 단어의 개수

// Algorithm Flow
// 