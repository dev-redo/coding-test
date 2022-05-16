function solution(str) {
    const stack = [];
    for (let x of str) {
        if (x === ')') {
            while(stack.length !== 0) {
                const target = stack.pop();
                if (target === '(') break;
            }
        }
        else {
            stack.push(x);
        }
    }
    return stack.join("");
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
