const decodeString = function (s) {
    return s.replace(/(\d)\[(\w+)\]/g, (a, b, c) => {
        console.log(a)
        return c.repeat(b);
    });
}

let s = '3[a]2[bc]';
let result = decodeString(s);
console.log(result)