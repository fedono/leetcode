
let n = 5
// let dp = Array.from({length: n}).fill(v => Array.from({length: n}).fill(0));
let dp = Array.from({length: n}).map(() => Array.from({length: n}).fill(0));

console.log(dp);

let dp1 = Array.from({length: n}, () => Array.from({length: n}).fill(0));
console.log(dp1);
