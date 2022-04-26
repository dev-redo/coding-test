const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const n = Number(input.shift());
const books = input.sort();

const dict = {};
let maxBook = books[0];
for (let book of books) {
    if (book in dict) dict[book] += 1;
    else dict[book] = 1;
    
    if (dict[maxBook] < dict[book]) maxBook = book;
}

console.log(maxBook);