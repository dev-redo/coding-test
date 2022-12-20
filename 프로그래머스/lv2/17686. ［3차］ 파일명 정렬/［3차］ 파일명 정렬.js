const REGEX = {
    head: /^\D+/,
    num: /\d+/,
    replaceZeroToEmptyString: /^0+/
}

function solution(files) {
    return files.sort((prevFile, currFile) => {
        const prevHead = prevFile.match(REGEX.head)[0].toLowerCase();
        const currHead = currFile.match(REGEX.head)[0].toLowerCase();
        
        // 알파벳 글자 크기대로 오름차순 정렬
        if (prevHead < currHead) return -1;
        if (prevHead > currHead) return 1;
        
        const prevNum = prevFile.match(REGEX.num)[0].replace(REGEX.replaceZeroToEmptyString, '');
        const currNum = currFile.match(REGEX.num)[0].replace(REGEX.replaceZeroToEmptyString, '');
        // 숫자 크기대로 오름차순 정렬
        return prevNum - currNum;
    })
}

// (오름차순) 정렬 우선순위
// 1. HEAD 부분을 기준으로 사전 순 정렬
//    - HEAD 문자열 비교 시 대소문자 구분 X
// 2. 1에서 HEAD가 같을 시 Number의 숫자 순으로 정렬
//    - 숫자 앞의 0은 무시 (ex. 012 === 12)
//    - EX. 9 < 10 < 0011 < 012 < 13 < 014
// 3. 1과 2가 동일할 시 원래 입력 순으로 정렬