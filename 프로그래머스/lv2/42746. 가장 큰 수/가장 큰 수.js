// a: 5, b: 0
// b+a : 05, a+b: 50 -> 내림차순 정렬 
function solution(numbers) {
    // [6, 10, 2]
    // => a: 5, b: 0
    // -> 05, 50 => 50 앞으로 가게 됩니다.
    let answer = numbers.map(el => el.toString())
                        .sort((a,b) => (b+a) - (a+b)) // 내림차순 정렬
                        .join(""); // 합쳐주고
    
    // [0,0,0] => 0 -> 000 -> 0으로 리턴
    // [1,0,0] => answer
    return answer[0]==='0'? '0' : answer;
}