const dvd = 3;
const songs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(dvd, songs));

function count(songs, capacity) {
    let cnt = 1;
    let sum = 0;
    
    for (let x of songs) {
        // dvd 용량 초과
        if (sum + x > capacity) {
            cnt += 1; // 그 다음 dvd
            sum = x;
        }
        else sum += x;
    }
    
    return cnt;
}

function solution(dvd, songs) {
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a,b) => a+b, 0);
    
    while (lt <= rt) {
        let mid = parseInt((lt+rt) / 2);
        // 가능한 케이스 (dvd 개수 안 넘어감)
        if (count(songs, mid) <= dvd) {
            answer = mid;
            rt = mid-1;
        }
        // 불가능한 케이스 (dvd 개수 넘어감)
        else {
            lt = mid + 1;
        }
    }
    return answer;
}
