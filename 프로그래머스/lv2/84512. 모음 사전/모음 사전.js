function solution(word) {
    const alphabetRank = { A: 0, E: 1, I: 2, O: 3, U: 4 };
    const unit = [781, 156, 31, 6, 1];
    
    return word
        .split("")
        .map((alphabet, index) => 1 + unit[index] * alphabetRank[alphabet])
        .reduce((acc, curr) => acc + curr, 0);
}