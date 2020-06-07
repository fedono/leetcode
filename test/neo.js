let s = "13[a]2[bc]";

let res = s.replace(/(\d+)\[(\w+)\]/g, (a, b, c) => {
    return c.repeat(b);
});
console.log(res);

const decodeString = function (s) {
    return s.replace(/(\d+)\[(\w+)\]/g, (a, b, c) => {
        return c.repeat(b);
    });
}

let res1 = decodeString(s);
console.log(res1);
console.log(s)
