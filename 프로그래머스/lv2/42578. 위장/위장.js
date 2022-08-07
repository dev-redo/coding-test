// dp: (n+1) * (m+1) - 1
function solution(clothes) {
    let answer = 1;
    
    const clothObj = {};
    for (let i=0; i<clothes.length; i++) {
        clothObj[clothes[i][1]] = (clothObj[clothes[i][1]] || 1) + 1;
    }
    
    for (let key in clothObj) {
        answer *= clothObj[key];
    }
    
    return answer - 1;
}