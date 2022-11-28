// 1. +, -, * 세 연산자의 우선순위를 반영한 6개 경우의 수를 배열로 만든다. ✅
const operator_combinations = [
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["-", "*", "+"],
    ["-", "+", "*"],
];

// 피연산자 2개와 연산자 1개를 입력받아 해당 연산을 수행한다.
const calculator = (prev, curr, operation) => {
    if (operation === '+') return prev + curr;
    if (operation === '*') return prev * curr;
    if (operation === '-') return prev - curr;
}


function solution(expression) {
    let answer = Number.MIN_SAFE_INTEGER;
    
    // 2. 각 경우에 대해 문자열 expression으로부터 연산자, 피연산자를 각각 배열로 분리한 후, 연산자 우선 순위를 고려하여 차례로 연산을 해준다. ✅
    operator_combinations.forEach(operator_combination => {
        // 2.1. 연산자, 피연산자 분리 ✅
        const operators = expression.match(/[\*\+\-]/g); // 연산자
        const operands = expression.match(/[0-9]+/g).map(Number); // 피연산자
        
        // 2.2. 각 연산자 우선순위에 대한 연산을 수행한다.
        operator_combination.forEach(oc => { // oc = +, -, *
            let index = operators.indexOf(oc); // 현재 탐색중인 연산자(+,-,*)가 존재하는지 여부
            while (index !== -1) { // 현재 탐색중인 연산자가 아직 존재한다면 반복문 수행하면서 연산 진행
                operands[index] = calculator(operands[index], operands[index + 1], oc);
                operands.splice(index + 1, 1);
                operators.splice(index, 1);
                index = operators.indexOf(oc);
            }
        })
        
        // 3. 각 경우의 우선 순위를 고려한 최종 연산 결과를 절대값으로 만든다. ✅
        const calculationResult = Math.abs(operands[0]);
        if (answer < calculationResult) answer = calculationResult;
    })
    
    // 4. 최종 연산 결과들 중 가장 큰 값을 리턴한다. ✅
    return answer;
}

// 주의 사항
// 연산자의 우선순위를 새로 정의할 때, 같은 순위의 연산자는 없어야 한다.

// @input: 수식
// @output: 전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의하여 만들 수 있는 가장 큰 숫자를 제출

// 주의 사항
// 1. 연산자의 우선순위를 새로 정의할 때, 같은 순위의 연산자는 없어야 한다.
// 2. 연산자는 +, -, * 세 개이다.

// Algorithm Flow
// 1. +, -, * 세 연산자의 우선순위를 반영한 6개 경우의 수를 배열로 만든다.
// 2. 각 경우에 대해 문자열 expression으로부터 연산자, 피연산자를 각각 배열로 분리한 후, 연산자 우선 순위를 고려하여 차례로 연산을 해준다.
//  - 2.1. 각 경우에 대해 문자열 expression으로부터 연산자, 피연산자를 각각 배열로 분리
//  - 2.2. 연산자 우선 순위를 고려하여 차례로 연산한다.

// ex. 10 + 20 - 10 + 10
// - operands = [10, 20, 10, 10]
// - operators = [+, *, -]
// - 우선순위 = + - *
    // + -> [30, 10, 10] / [-, +]
    // + -> [30, 20] / [-]
    // * -> 연산자 존재 X
    // - -> [10] / []
    // - -> 연산자 존재 X

// 3. 각 경우의 우선 순위를 고려한 최종 연산 결과를 절대값으로 만든다.
// 4. 최종 연산 결과들 중 가장 큰 값을 리턴한다.