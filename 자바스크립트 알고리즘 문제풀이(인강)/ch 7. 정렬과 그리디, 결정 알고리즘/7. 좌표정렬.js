const coord = [[2,7], [1,3], [1,2], [2,5], [3,6]];

function sortCoord(coord) {
    return coord.sort((c1, c2) => {
        const [x1, y1] = c1;
        const [x2, y2] = c2;
        
        // x값이 같을 경우 y값 오름차순
        if (x1-x2 === 0) return y1-y2;
        // x값이 다를 경우 x값 오름차순
        else return x1-x2;
    })
}

console.log(sortCoord(coord));
