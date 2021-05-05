const longestCommonSubstring = function (s, t) {
    let dp = Array.from({length: t.length + 1}).fill(0);
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = t.length; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[j + 1] = dp[j] + 1;
            }
            else {
                dp[j + 1] = 0;
            }
            max = Math.max(max, dp[j + 1]);
        }
    }

    return max;
}

let s = '1ab2345cd', t = '12345ef';
let result = longestCommonSubstring(s, t);
console.log(result)