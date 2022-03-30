function solution(record) {
    var answer = [];
    const user = {};

    const splitRecode = record.map(el => el.split(" "));
    for (let el of splitRecode) {        
        if (el[0] === 'Enter') {
            answer.push([el[1], "님이 들어왔습니다."]);
        }
        else if (el[0] === 'Leave') {
            answer.push([el[1], "님이 나갔습니다."]);
            continue;
        }
        user[el[1]] = el[2];
    }
    return answer.map(el => user[el[0]] + el[1])
}