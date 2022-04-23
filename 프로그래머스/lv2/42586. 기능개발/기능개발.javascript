function solution(progresses, speeds) {
    var answer = [0];
    const days = progresses.map((progress, idx) => {
        const time = 100 - progress;
        return Math.ceil(time / speeds[idx]);
    })
    const daysLen = days.length - 1;
    let maxDay = days[0];
    let deploy = 0;
    
    for (let i=0; i <= daysLen; i++) {
        if (maxDay < days[i]) {
            maxDay = days[i];
            answer[++deploy] = 1;
        } else {
            answer[deploy] += 1;
        }
    }
    return answer;
}