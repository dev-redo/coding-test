function solution(s) {
    const sort = s.split(" ").sort((a,b) => a-b);
    const min = sort[0];
    const max = sort[sort.length-1];
    
    return `${min} ${max}`
}
