function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const deadlineTime = 1439;
    
    let output = {};
    records.forEach(record => {
        const [recordTime, carNumber, type] = record.split(' ');
        
        const [hour, minute] = recordTime.split(":").map(time => Number(time));
        const time = hour * 60 + minute;
        
        if (!output[carNumber]) {
            output[carNumber] = { time: 0, carNumber, inTime: 0 }
        }
        
        output[carNumber].type = type;
        
        if (type === 'OUT') {
            const currTime = time - output[carNumber].inTime;
            output[carNumber].time += currTime;
            output[carNumber].inTime = 0;
            return;
        }
        
        output[carNumber].inTime = time;
    });
        
    output = Object.values(output).sort(({carNumber: prevNum}, {carNumber: currNum}) => prevNum - currNum);
    return output.map(car => {
        if (car.type === 'IN') {
            const currTime = deadlineTime - car.inTime
            car.time += currTime;
        }
        
        if (basicTime >= car.time) {
            return basicFee;
        }
        
        return basicFee + Math.ceil((car.time - basicTime) / unitTime) * unitFee;
    });
}

// @input 주차장의 요금표, 입차/출차 기록
// @return "차량번호가 작은" 순서대로 청구할 주차요금 배열
// 주차요금 계산: basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee