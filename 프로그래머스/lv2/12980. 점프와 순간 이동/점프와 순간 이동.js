// 이동방법
// 1. 순간이동: 사용량 0을 사용해서 지금까지 온 거리 x 2 를 통해서 움직임
// 2. 점프: K 칸을 점프해서, 건전지를 K만큼 사용해서 움직이는 방법

// @return 건전지 최소 => 최대한 순간이동 하기
function solution(n) {
    var ans = 0;
    
    while (n !== 0) {
        if (n % 2 === 0) {
            n /= 2;
            continue;
        }
        n -= 1;
        ans += 1;
    }
    
    return ans;
}

// 5000 -> 2500
// 2500 -> 1250
// 1250 -> 625
// 625 -> 624 + 1(ans++)
// 624 -> 312
// 312 -> 156
// 156 -> 78
// 78 -> 39
// 39 -> 38 + 1(ans++)
// 38 -> 19
// 19 -> 18 +1(ans++)
// 18 -> 9
// 9 -> 8 + 1(ans++)
// 8 -> 4
// 4 -> 2
// 2 -> 1
// 1 -> 0 + 1(ans++)
// 0