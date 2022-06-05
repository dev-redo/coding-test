function solution(progresses, speeds) {
    // progresses: [93, 30, 55]
    // delay: [7, 3, 9]
    const delay = progresses.map((p, idx) => {
        return Math.ceil((100 - p) / speeds[idx])
    })
        
    const answer = [];
    let dayTask = 0;
    let maxDay = delay[0]; // 7
    
    // 7, 3, 9
    for (let d of delay) {
        // 7 > 7 ? NO -> dayTask += 1;
        // 3 > 7 ? NO -> dayTask += 1;
        // 9 > 7 ? YES -> 
        // answer.push(2), maxDay = 9, dayTask = 1
        // 더 이상 원소가 없으므로 loop 종료
        if (d > maxDay) {
            answer.push(dayTask);
            dayTask = 1;
            maxDay = d;
        }
        else {
            dayTask += 1;
        }
    }
    
    // answer.push(1);
    answer.push(dayTask);
    // [2, 1]
    return answer;
}