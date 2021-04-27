const maxEnvelopes = function (envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }

    const binarySearch = function (f, target) {
        let low = 0, high = f.length - 1;
        while (low < high) {
            const mid = Math.floor((high - low) / 2) + low;
            if (f[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }

        return low;
    }

    const n = envelopes.length;
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[1] - b[1]);
    const f = [envelopes[0][1]];
    for (let i = 0; i < n; i++) {
        const num = envelopes[i][1];
        if (num > f[f.length - 1]) {
            f.push(num);
        }
        else {
            const index = binarySearch(f, num);
            f[index] = num;
        }
    }

    return f.length;
}

let envelopes = [[5,4],[6,4],[6,7],[2,3]];
let result = maxEnvelopes(envelopes);
console.log(result)