const input = require('fs').readFileSync('/dev/stdin').toString().split('').slice(0, -1);

const parsed = input.filter(num => {
  num = Number(num);
  return isNumber(num) ?? num
});

const answer = Number(parsed.join(""));
console.log(answer)

function isNumber(num) {
	return !Number.isNaN(num) && typeof num === 'number'
}
