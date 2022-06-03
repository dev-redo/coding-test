function solution(progresses, speeds) {
    const delay = progresses.map((p, idx) => {
        return Math.ceil((100 - p) / speeds[idx])
    })
    
    const answer = [];
    let day_task = 0;
    let maxDay = delay[0];
    
    for (let d of delay) {
        if (d > maxDay) {
            answer.push(day_task);
            day_task = 1;
            maxDay = d;
        }
        
        else {
            day_task += 1;
        }
    }
    
    answer.push(day_task);
    
    return answer;
}