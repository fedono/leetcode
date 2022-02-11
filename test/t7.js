/*
* 输入：[['a','b', 'c'],['d', 'e', 'f']]
* 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
* */

let input = [['a','b', 'c'],['d', 'e', 'f'], ['g', 'h', 'j']];
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

function combine(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    for (let k = 0; k < a.length; k++) {
      let e = a[k];
      for (let j = i + 1; j < arr.length; j++) {
        let b = arr[j];
        for (let l = 0; l < b.length; l++) {
          res.push(e + b[l])
        }
      }
    }
  }
  
  return res;
}
let input1 = [['a','b', 'c'],['d', 'e', 'f'], ['g', 'h', 'j']];
let result1 = combine(input1);
console.log(result1)