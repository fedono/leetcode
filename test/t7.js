/*
* 输入：[['a','b', 'c'],['d', 'e', 'f']]
* 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
* */

let input = [['a','b', 'c'],['d', 'e', 'f']];
let first = input.shift();
let result = input.reduce((memo, current) => {
    let res = [];
    current.forEach(v => {
        memo.forEach(item => {
            res.push(`${item}${v}`)
        });
    });
    return res;
}, first);

console.log(result);
