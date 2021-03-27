function poke(arr) {
    let i = 1
    let out = []
    while (arr.length) {
        if (i % 2) {
            out.push(arr.shift())
        } else {
            arr.push(arr.shift())
        }
        i++
    }
    return out
}


function reverse(arr) {
    let i = 1
    let out = []
    while (arr.length) {
        if (i % 2) {
            out.unshift(arr.pop())
        } else {
            out.unshift(out.pop())
        }
        i++
    }
    return out
}

let res = reverse([1,2,3,4,5,6,7,8,9,10,11,12,13 ])
console.log(res);
// [1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7]