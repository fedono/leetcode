/*function test(a, b) {
    console.log(b)
    return {
        test: function(c){
            return test(c, a);
        }
    };
}

var retC = test('good').test('bad');
retC.test('good');
retC.test('good');
retC.test('good');
retC.test('good');
retC.test('good');*/


const shellSort = function(arr, len) {
    for (let gap = len >> 1; gap > 0; gap >>= 1) {
        for (let i = gap; i < len; i++) {
            let temp = arr[i];
            let j;
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

let arr = [ 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10 ];
let res = shellSort(arr, arr.length);
console.log(res);