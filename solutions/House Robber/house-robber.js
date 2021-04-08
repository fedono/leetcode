// source

let rob = function(nums) {
  let len = nums.length;
  if (!len) return 0;

  let dp = [];

  // 设定第一次的结果
  dp[0] = [];
  dp[0][0] = 0;  // 当前房间不偷
  dp[0][1] = nums[0]; // 当前房间偷

  for (let i = 1; i < len; i ++) {
    dp[i] = [];
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]); // 前一次中两个结果中最大的那个，记录在当前数组中（同时也代表当前房间不偷）
    dp[i][1] = dp[i-1][0] + nums[i]; // 当前房间偷
  }

  return Math.max(dp[len-1][0], dp[len-1][1]); // 获取当前结果中偷与不偷中更大的进行返回
}

// 这是一个通过寻求局部最优解，然后最终得到结果最优解的过程
