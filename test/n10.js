const pancakeSort = function (cakes) {
    const sort = function (cakes, n) {
        if (n === 1) {
            return;
        }

        let maxCake = 0;
        let maxCakeIndex = 0;
        for (let i = 0; i < n; i++) {
            if (cakes[i] > maxCake) {
                maxCakeIndex = i;
                maxCake = cakes[i];
            }
        }

        reverse(cakes, 0, maxCakeIndex);
        res.push(maxCakeIndex + 1);
        reverse(cakes, 0, n - 1);
        res.push(n);

        sort(cakes, n - 1);
    }

    const reverse = function (arr, i , j) {
        while (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    let res = [];
    sort(cakes, cakes.length);
    return res;
}

let cakes = [3,2,4,1];
let result = pancakeSort(cakes);
console.log(result)