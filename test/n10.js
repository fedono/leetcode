const findShortestSubArray = function (nums) {
    // 算出所有数字出现的频次
    let calc = nums.reduce((memo, current) => {
        memo[current] ? memo[current]++ : memo[current] = 1;
        return memo;
    }, {});

    // 计算一下出现最多的频次数是多少
    let keys = Object.keys(calc);
    let max = 0; // 用来比较的
    for (const key of keys) {
        if (calc[key] >= max) {
            max = calc[key];
        }
    }

    // 把出现频次最多的数字添加到一个数组里面去
    let arr = []; // 记录出现频次最多的数
    for (const key of keys) {
        if (calc[key] === max) {
            arr.push(key)
        }
    }

    // 从上面的那个数组中来计算最小的连续子数组
    let res = Infinity;
    for (const item of arr) {
        // 因为在第一部计算所有数字的频次是加入到一个对象中，而对象的减值会转换成字符串，所以这里使用+来转换回来
        let len = nums.lastIndexOf(+item) - nums.indexOf(+item);
        if (len < res) {
            res = len;
        }
    }

    // 因为是连续子数组的长度，而 lastIndexOf - indexOf 是索引的差值，所以还要加上 1
    return res + 1;
}

let nums = [4, 5, 1, 2, 2, 3, 1];
let result = findShortestSubArray(nums);
console.log(result)