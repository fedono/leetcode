const decodeString = function (s) {


  return s.replace(/(\d+)\[(\w+)\]/g, (a, b, c) => {
    // 匹配的 a 就是 3[a] 这种，b 就是第一个括号(\d+)匹配到的数字，c 就是第二个括号(\w+)匹配到的字符串，也就是 a b c 都是按照层级顺序这样往后排的
    return c.repeat(b);
  });
}

let s = '3[a2[bc]]';
const res = decodeString(s);

const ree = s.matchAll(/(\d+)\[(\w\W)+\]/g);
// console.log(ree)
// /(\d+)\[(\w+)\]/g.ma
console.log(ree)

