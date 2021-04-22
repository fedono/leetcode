function removeDuplicates(arrs) {
    let i = 0;
    for (let j = 1; j < arrs.length; j++) {
        if (arrs[j] !== arrs[i]) {
            i++;
            arrs[i] = arrs[j];
        }
    }
    console.log(arrs);
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
removeDuplicates(arrs);

