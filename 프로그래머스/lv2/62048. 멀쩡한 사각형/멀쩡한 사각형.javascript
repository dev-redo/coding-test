// W + H - 최대공약수
function solution(w, h) {
    const GCD = (n1, n2) => {
        while (true){
            const r = n1 % n2;
            if(r === 0) return n2;

            n1 = n2;
            n2 = r;
        }
    }
    
    const r = GCD(w,h);
    return (w * h) - (w + h - r);
}