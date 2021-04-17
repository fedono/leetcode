const permute = nums => {
    const res = [];
    const used = {};

    const dfs = path => {
        if (path.length === nums.length) {
            res.push(path);
            return;
        }

        for (const num of nums) {
            if (used[num]) {
                continue;
            }

            used[num] = true;
            dfs(path.concat(num));
            used[num] = false;
        }
    }

    dfs([]);
    return res;
}

let result = permute([1, 2, 3]);
console.log(result);
