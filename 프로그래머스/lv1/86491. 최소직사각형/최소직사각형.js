function solution(sizes) {
    let maxSize = [0, 0]; // 가로 세로
    // 긴 원소 : 가로, 짧은 원소 : 세로
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    // 가장 긴 가로, 세로 구하기
    rotated.forEach(([w,h]) => {
        if (maxSize[0] < w) maxSize[0] = w;
        if (maxSize[1] < h) maxSize[1] = h;
    });
    let answer = maxSize[0] * maxSize[1];
    return answer;
}