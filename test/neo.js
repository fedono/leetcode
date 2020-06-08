const climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return climbStairs(n - 2) + climbStairs(n - 1);
}

const climbStairs1 = function(n) {
    if (n === 1) {
        return;
    }

    let dp = [];
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i -2];
    }
    return dp[n];
}

console.log(climbStairs(15))
console.log(climbStairs1(15))
