const longestPalindromeSubseq = function (s) {
    let n = s.length;
    let dp = Array.from({length: n}).map(() => Array.from({length: n}).fill(0));

    // base case
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            }
            else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    console.log(dp);
    // 有点不明白的是，为什么这里返回的是 dp[0][n - 1] 啊
    return dp[0][n - 1];
}


let res = longestPalindromeSubseq('abcbc');
console.log(res)
