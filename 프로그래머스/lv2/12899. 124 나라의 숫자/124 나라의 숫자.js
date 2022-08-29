function solution(n) {
    let str = ''
    while(n/3){
        str = to124(n % 3) + str;
        n -= (n % 3 ? n % 3 : 3);
        n = Math.floor(n/3);
    }
    return str;
}

function to124(n){
    return n == 0 ? 4 : n;
}