let p1 = new Promise((resolve, reject) => resolve(1));
// let p2 = p1.then((data) => jack // 使用未定义的变量触发出错);

// console.log(p2)；

const fn = function() {};

console.log(typeof fn)