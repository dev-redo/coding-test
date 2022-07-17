const DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const isRoad = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;

function solution(maps) {    
    const r = maps.length - 1;
    const c = maps[0].length - 1;
    const queue = [[0,0,1]];
    
    while (!!queue.length) {
        const [y,x,cnt] = queue.shift();
        if (y === r && x === c) return cnt;
        
        for (let k=0; k<4; k++) {
            const [dy, dx] = DIRECTION[k];
            const ny = y + dy;
            const nx = x + dx;
            
            if (isRoad(ny, nx, r, c)) continue;
            if (maps[ny][nx] === 0) continue;
            maps[ny][nx] = 0;
            queue.push([ny, nx, cnt + 1]);
        }
    }
    return -1;
}