const shipWithinDays = function (weights, D) {
    let left = Math.max(...weights);
    let right = weights.reduce((memo, curr) => {
        memo = memo + curr;
        return memo;
    }, 0);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        // need 为需要运送的天数
        // cur 为当前这一天已经运送的包裹重量之和
        let need = 1, cur = 0;
        for (const weight of weights) {
            if (cur + weight > mid) {
                need++;
                cur = 0;
            }
            cur += weight;
        }

        if (need <= D) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }

    return left;
}

// let weights = [1,2,3,4,5,6,7,8,9,10], D = 5;
let weights = [3,2,2,4,1,4], D = 3
let result = shipWithinDays(weights, D);
console.log(result)
