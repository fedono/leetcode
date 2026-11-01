
# 有效的括号-ii

 这种题目就是正则的题目，类似 [44-通配符匹配](./44-通配符匹配.md)

给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。

任何右括号 ) 必须有相应的左括号 ( 。

左括号 ( 必须在对应的右括号之前 )。

\* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。

一个空字符串也被视为有效字符串。

示例 1:


输入: "()"

输出: True


示例 2:


输入: "(*)"

输出: True


示例 3:

输入: "(*))"

输出: True


注意: 字符串大小将在 [1，100] 范围内。

```javascript

const isValid = function (s) {
  if (s.length === 0) {
    return true;
  }
  let minOpen = 0; // 1. 当前可能剩余的最少左括号数量：把 * 尽量当成 ')' 或空串
  let maxOpen = 0; // 2. 当前可能剩余的最多左括号数量：把 * 尽量当成 '('
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      minOpen++;
      maxOpen++;
    } else if (c === ')') {
      minOpen = Math.max(0, minOpen - 1);
      maxOpen--;
      if (maxOpen < 0) {
        return false;
      }
    } else if (c === '*') {
      /* 
        因为`*` 有三种可能：
      当作`)` ：会减少一个未匹配左括号，所以`minOpen - 1`
      当作空串：不变
      当作`(` ：会增加一个未匹配左括号，所以`maxOpen + 1`
      因此`*` 会把可能范围扩大。
      */
      minOpen = Math.max(0, minOpen - 1);
      maxOpen++;
    }
  }

  // 如果`minOpen === 0` ，说明至少存在一种合法解释；如果`minOpen > 0` ，说明无论怎么解释`*` ，都还有左括号没被匹配。
  return minOpen === 0;
};

const result = isValid("(*))");
console.log(result);

const result2 = isValid("(()");
console.log(result2);


const result3 = isValid("(*)");
console.log(result3);

const result4 = isValid("())");
console.log(result4);
```


```javascript
function match(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        // 检测到 ( 和 * 直接添加到数组中
        if (str[i] === '(') {
            arr.push(str[i]);
        }
        else if (str[i] === '*') {
            arr.push(str[i]);
        }
        // 主要的判断还是在这里
        else if (str[i] === ')') {
            let end = arr[arr.length - 1];
            // 检测到了 ) 的时候，如果前一位是 ( 就将前一位抵消掉
            if (end === '(') {
                arr.pop();
            }
            // 只有在检测到了 * 的时候，才需要判断
            if (end === '*') {
                // 如果前一位是*，那么我们知道肯定是能够消掉当前的 ) 的，
                // 问题是我们是否有用这个 * 来消掉当前的)，还是检测前面是否有 (，用前面的 ( 来消掉
                // 因为如果用前面的 ( 的消掉的话，那么我们这里的 * 就可以是字符串自己消掉了，或者留给下面的 ) 来消掉
                let i = arr.length - 2;
                let check = false;
                while (i = 0) {
                    let end2 = arr[i];
                    // 检测到了前面有 ( 了，就使用 splice 来消掉 (
                    if (end2 === '(') {
                        check = true;
                        let index = arr.indexOf('(');
                        arr.splice(index, 1);
                        break;
                    };
                    i--;
                }

                // 如果前面没有( 也没关系，我们直接使用当前的 * 来消掉，就将之前的 * pop() 出去就好
                if (!check) {
                    arr.pop();
                }
            }
        }
    }

    // 1. 最后数组里面只有 *
    // 2. 最后数组里面含有 * 和 (，这时候就需要做检测了，检测含有( 的时候，看后面是否还有 * 能够抵消掉 (，用一个标志位，这样可以做多次的检测，
    //    如果到最后还是 false，那么就说明能够抵消掉了
    let checkParenthesis = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            checkParenthesis = true;
        }
        if (checkParenthesis && arr[i] === '*') {
            checkParenthesis = false;
        }
    }

    return !checkParenthesis;
}

// let str = '***))*';
// let str = '(*))*';
// let str = '(*)';
// let str = '**((**)*';
let str = '(()*';
let result = match(str);
console.log(result);
```

