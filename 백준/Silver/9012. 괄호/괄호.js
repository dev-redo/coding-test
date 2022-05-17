function solution(input) {
  const cmd = (str) => {
    const stack = [];
    const list = str.split("");

    list.forEach((value) => {
      if (stack[0] === ')') return "NO";
      if (stack.length === 0)stack.push(value);
      else if (stack.slice(-1)[0] === '(' && value === ')') stack.pop();
      else stack.push(value);
    });

    if (stack.length == 0) return "YES";
    else return "NO";
  };

  let answer = input.slice(1).reduce((pre, cur) => {
	return pre += `${cmd(cur)}\n`
  }, "");

  return answer;
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });