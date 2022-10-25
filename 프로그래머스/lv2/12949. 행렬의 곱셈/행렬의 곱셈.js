function solution(arr1, arr2) {
    const [row, col] = [arr1.length, arr2[0].length]; // row = B, col = C
    const result = [...Array(row)].map(() => [...Array(col)]);  // 1. B * C 배열 생성
    
    for (let i=0; i<row; i++) {         // 2.1. arr1의 i번째 행
        for (let j=0; j<col; j++) {     // 2.2. arr2의 j번째 행
             result[i][j] = arr1[i].reduce((sum, arr1Val, idx) => sum + arr1Val * arr2[idx][j], 0);
        }
    }
    
    return result;
}

// ex. (A * B)와 (C * D)의 행렬의 곱셈
// @return B * C 행렬 생성

// 공식) result[i,j] = arr1의 i번째 행과 arr2의 j번째 열의 원소들을 곱한 것들의 합
// ex)
// [5 6]   [1 2]     -> (5 x 1 + 6 x 3) + (5 x 2 + 6 x 4)
// [7 8]   [3 4]     -> (7 x 1 + 8 x 3) + (7 x 2 + 8 x 4)
// ex. result[1][0] = (arr1[1][0] * arr2[0][0]) + (arr1[1][1] * arr2[0][1])
// result[i][j] = arr1[i].reduce((sum, arr1Val, idx) => sum + arr1Val * arr2[idx][j], 0)

// 로직
// 1. B * C 배열 생성
// 2. 2중 루프
//  - i = arr1의 원소 -> B까지 LOOP
//  - j = arr2의 원소 -> C까지 LOOP
//  - arr1의 i행과 arr2의 j열을 이용해 result[i,j] 구하기