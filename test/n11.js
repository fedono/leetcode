const solveNQueens = n => {
    const board = Array.from({length: n}, () => Array.from({length: n}).fill('.'));

    const cols = new Set(); // 与当前皇后同列的位置
    const diag1 = new Set(); // 与当前皇后反对角线的位置
    const diag2 = new Set(); // 与当前皇后正对角线的位置
    const res = [];

    const backtrack = row => {
        if (row === n) {
            const stringsBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringsBoard[i] = stringsBoard[i].join('');
            }
            res.push(stringsBoard);
            return;
        }

        for (let col = 0; col < n; col++) {
            // 先检测一下，在与当前皇后同列以及对角线不存在的时候，就进行回溯
            if (
                !cols.has(col)
                && !diag1.has(row + col)
                && !diag2.has(row - col)
            ) {
                cols.add(col);
                diag1.add(row + col);
                diag2.add(row - col);

                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';

                cols.delete(col);
                diag1.delete(row + col);
                diag2.delete(row - col);
            }
        }
    }

    backtrack(0);
    return res;
}

let result = solveNQueens(4);
console.log(result);