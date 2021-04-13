const generateParenthesis = function (n) {
    return _generate(0, 0, n, '');
}

const _generate = function (left, right, n, s) {
    if (left === n && right === n) {

    }

    if (left < n) {
        this._generate(left + 1, right, n, s + "(");
    }

    if (left > right) {
        this._generate(left, right + 1, n, s + ")");
    }
}
