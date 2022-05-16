function solution(str) {
    const stack = [];
    const operation = ['+', '-', '*', '/'];
    for (let x of str) {
        if (operation.includes(x)) {
            let rt = stack.pop();
            let lt = stack.pop();
            
            if (x === '+') stack.push(lt + rt);
            if (x === '-') stack.push(lt - rt);
            if (x === '*') stack.push(lt * rt);
            if (x === '/') stack.push(lt / rt);
        }
        else {
            stack.push(Number(x));
        }
    }
    return stack[0];
}

const str = "352+*9-";
console.log(solution(str));
