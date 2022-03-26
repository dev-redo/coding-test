const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, sortedList, M, testList] = input.map((el) =>
  el.split(" ").map((val) => +val)
);

sortedList.sort((a, b) => a - b);

// 이진탐색 함수
function binarySearch(arr, elem, start, end, middle) {
  middle = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[middle] === elem) return 1;
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return 0;
}

const result = testList.map((el) => {
  return binarySearch(sortedList, el, 0, sortedList.length - 1, 0);
});
console.log(result.join("\n"));