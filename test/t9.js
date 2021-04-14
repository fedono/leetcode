
const moveZeroes = function (nums) {
    let zeroAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[zeroAt++] = nums[i];
        }
    }

    for (let i = zeroAt; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

let result = moveZeroes([0, 0, 1, 3, 4]);
console.log(result)
