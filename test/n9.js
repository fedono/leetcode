const unique1 = function (arrs) {
    let duplicates = [];
    for (let i = 0; i < arrs.length; i++) {
        for (let j = i + 1; j < arrs.length; j++) {
            if (isEqual(arrs[i], arrs[j]) && duplicates.indexOf(j) === -1) {
                duplicates.push(j);
            }
        }
    }

    // 然后再做一次循环，把 arrs 中含有 duplicates 中的索引删除掉
    for (let i = duplicates.length - 1; i >= 0; i--) {
        arrs.splice(i, 1);
    }

    return arrs;
}

const unique = function (arrs) {
    let duplicates = [];
    let i = 0;
    let j = i + 1;
    while (i < arrs.length - 1) {
        if (isEqual(arrs[i], arrs[j]) && duplicates.indexOf(j) === -1) {
            duplicates.push(j);
        }
        j++;
        if (j === arrs.length) {
            i++;
            j = i + 1;
        }
    }
    // 然后再做一次循环，把 arrs 中含有 duplicates 中的索引删除掉
    for (let i = duplicates.length - 1; i >= 0; i--) {
        arrs.splice(i, 1);
    }

    return arrs;
}

function isEqual(a, b) {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
        return false;
    }

    aKeys.sort((c, d) => c - d || c.localeCompare(d));
    bKeys.sort((c, d) => c - d || c.localeCompare(d));

    for (let i = 0; i < aKeys.length; i++) {
        if (a[aKeys[i]] !== b[bKeys[i]]) {
            return false;
        }
    }

    return true;
}
let arrs = [
    {
        a: 1,
        b: 2
    },
    {
        b: 2,
        a: '1'
    },
    {
        b: 2,
        a: 1
    },
    {
        c: 3
    },
    {
        d: 4
    }
]
let result = unique(arrs);
console.log(result);