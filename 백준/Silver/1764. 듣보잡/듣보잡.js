const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const [nm, ...list] = input;
const [n, m] = nm.split(' ').map(s => Number(s));

const hearList = list.slice(0, n).sort();
const seeList = list.slice(n, n+m);

function binarySearch(sortList, el, start, end, mid) {
    mid = Math.floor((start+end)/2);
    while(start<=end) {
        if (sortList[mid] === el) return true;
        else if (el < sortList[mid]) end = mid-1;
        else start = mid+1;
        mid = Math.floor((start+end)/2);
    }
    return false;
}

const result = seeList.filter(el => {
    return binarySearch(hearList, el, 0, seeList.length-1, 0);
})

console.log(result.length);
console.log(result.sort().join('\n'))