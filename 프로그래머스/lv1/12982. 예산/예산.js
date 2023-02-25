function solution(d, budget) {
    let money = budget;
    let count = 0;
    d.sort((a,b) => a-b); // 오름차순 정렬
    for (let i = 0; i < d.length; i++) {
        // 한도초과 시
        if (money < d[i]) break;
        else {
            money -= d[i];
            count++;
        }
    }
    return count;
}