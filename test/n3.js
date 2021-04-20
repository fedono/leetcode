const backspaceStringCompare = function (s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let n = 0; // s 字符串含有 # 的个数（不是总的个数，是计算时做一个临时统计）
    let m = 0; // t 字符串含有 # 的个数
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] === '#') {
                n++;
                i--;
            }
            else if (n > 0) {
                n--;
                i--;
            }
            else {
                break;
            }
        }

        while (j >= 0) {
            if (t[j] === '#') {
                m++;
                j--;
            }
            else if (m > 0) {
                m--
                j--;
            }
            else {
                break;
            }
        }

        if (s[i] !== t[j]) {
            return false;
        }

        i--;
        j--;
    }

    return true;
}

let s = "ab#c", t = "adc##c";
let result = backspaceStringCompare(s, t);
console.log(result);

var backspaceCompare = function(S, T) {
    let i = S.length - 1,
        j = T.length - 1,
        skipS = 0,
        skipT = 0;
    // 大循环
    while(i >= 0 || j >= 0){
        // S 循环
        while(i >= 0){
            if(S[i] === '#'){
                skipS++;
                i--;
            }else if(skipS > 0){
                skipS--;
                i--;
            }else break;
        }
        // T 循环
        while(j >= 0){
            if(T[j] === '#'){
                skipT++;
                j--;
            }else if(skipT > 0){
                skipT--;
                j--;
            }else break;
        }
        if(S[i] !== T[j]) return false;
        i--;
        j--;
    }
    return true;
};

let res = backspaceCompare(s, t);
console.log(res)