// 给定一个升序整型数组[0,1,2,4,5,7,13,15,16],找出其中连续出现的数字区间，输出为["0->2","4->5","7","13","15->16"]

// 找到所有的连续区间，然后输出的时候获取 start / end 就好
// 其实就是建立一个栈，循环的时候，把第一个加入进去，如果当前这个不是前一个的 +1，那么久添加到需要输出的数组中去

const summaryRanges = function(arr) {
    let res = [];

    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            let prev = res[res.length - 1].split('->')[0];
            res[res.length - 1] = `${prev}->${arr[i]}`;
        }
        else {
            res.push(String(arr[i]))
        }
    }

    return res;
}

console.log(summaryRanges([0,1,2,4,5,7,13,15,16]))
