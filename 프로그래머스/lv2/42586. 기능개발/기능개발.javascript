function solution(progresses, speeds) {
    const delay = progresses.map((p, idx) => {
        return Math.ceil((100 - p) / speeds[idx])
    })
    
    const answer = [];
    let dayTask = 0;
    let maxDay = delay[0];
    
    for (let d of delay) {
        if (d > maxDay) {
            answer.push(dayTask);
            dayTask = 1;
            maxDay = d;
        }
        
        else {
            dayTask += 1;
        }
    }
    
    answer.push(dayTask);
    
    return answer;
}