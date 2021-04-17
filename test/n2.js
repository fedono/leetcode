const permutations = nums => {
    const res = [];
    const used = Array.from({length: nums.length});
    nums.sort((a, b) => a - b);

    const dfs = path => {
        if (path.length === nums.length) {
            res.push(path.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            // 避免产生重复的排列
            if (
                i - 1 >= 0
                && nums[i - 1] === nums[i]
                && !used[i - 1]
            ) {
                continue;
            }

            // 典型的回溯法中的操作，先做一次标记，然后执行 dfs 然后把标记清除
            path.push(nums[i]);
            used[i] = true;
            dfs(path);
            path.pop();
            used[i] = false;
        }
    }
}