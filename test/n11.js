const longestPalindrome = function(s) {
    // 使用两个指针
    // let i = 0;
    // let j = s.length - 1;
    let mid = Math.ceil(s.length / 2);
    let i = mid;
    let j = mid;
    while (i >= 0 && j < s.length) {
        if (s[i] === s[j]) {
            i--;
            j++;
        }


    }
}