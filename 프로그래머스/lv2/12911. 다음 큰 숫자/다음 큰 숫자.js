function solution(n) {    
    const nNum = checkOneCnt(n);
    
    let flag = n + 1;
    while (flag <= 1000000) {
        const curNum = checkOneCnt(flag);
        if (nNum === curNum) return flag;
        
        flag += 1;
    }
}

const checkOneCnt = (num) => {
    return num.toString(2).split("")
            .reduce((cnt, el) => cnt + (el === '1'), 0);
}