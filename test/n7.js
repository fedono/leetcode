function removeDuplicates(arrs) {
    let weakMap = new WeakMap();
    let newArr = [];
    let j = 1;
    for (let i = 0; i < arrs.length; i++) {
        if (compare(arrs[i], arrs[j])) {

        }
    }
    return newArr;
}

let arrs = [
    {
        a: 1,
        b: 2
    },
    {
        b: 2,
        a: 1
    },
    {
        c: 1
    },
    {
        k: 1
    }
]
let result = removeDuplicates(arrs);
console.log(result);

let obj = {};

obj[arrs[0]] = true;
obj[arrs[1]] = true;

console.log(JSON.stringify(arrs[0]) === JSON.stringify(arrs[1]))
// console.log(obj)
