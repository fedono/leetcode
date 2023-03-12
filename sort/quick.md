# 快速排序

merge sort 中有介绍，也就是 merge sort 是根据数组的长度来分左右，quick sort 是根据值来分左右

先看一个最简单的

```javascript
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  
  const chosenIndex = array.length - 1;
  const chosen = arr[chosenIndex]
  
  const a = []
  const b = []
  for (let i = 0; i < chosenIndex; i++) {
    const temp = arr[i]
    temp < chosen ? a.push(temp) : b.push(temp)
  }
  
  const output = [...quickSort(a), chosen, ...quickSort(b)]
  return output
}


```