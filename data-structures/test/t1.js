const lengthOfLongestSubstring = function(str) {
    let occ = new Set();
    let n = str.length;
    for (let i = 0; i < n; i++) {
        if (!occ.has(str[i])) {
            occ.add(str[i]);
        } else {
            occ = new Set();
        }
        
    }
}