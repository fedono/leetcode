const shuffle = function (arr) {
    let indexes = Array.from({length: arr.length}).map((_, i) => i);

    return arr.map(_ => {
        // 每次随机一个 indexes ，然后再从 indexes 中删除
        const index = Math.floor(Math.random() * indexes.length);
        return arr[indexes.splice(index, 1)];
    });
}

let res = shuffle([1, 2, 3, 4, 5]);
console.log(res)
