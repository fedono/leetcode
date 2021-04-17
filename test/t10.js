const generateParenthesis = function (n) {
  const res = [];

  const dfs = (lRemain, rRemain, str) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }

    // 既然需要把 ( 的次数遍历完，那么不是久只有一种情况，就是 ((())) 这种？为什么这种dfs 还能产生其他的
    if (lRemain > 0) {
      console.log(str + '(', '--- left')
      dfs(lRemain - 1, rRemain, str + '(');
      console.log(str + '(', '--- left 2')
    }

    if (lRemain < rRemain) {
      console.log(str + ')', '--- right')
      dfs(lRemain, rRemain - 1, str + ')');
      console.log(str + ')', '--- right 2')
    }
  }

  dfs(n, n, '');

  return res;
}

let result = generateParenthesis(3);
console.log(result);