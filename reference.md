- 按类别来刷，比如动态规划把动态规划的题都看下（五大常用算法分别刷，总结类型）
    - 搜索下 『LeetCode 动态规划』关键字，肯定有人总结了哪些题是动态规划的
    - 数据结构的，可以参考 左程云 的那本书《程序员代码面试指南》
- 按标签刷
    - 在 leetcode-cn 中，点击右侧标签筛选出当前标签下的题目，选择『容易』，然后刷到『难』，然后看看别人总结的规则
        > 类别和标签有重合的地方，但也有区别的地方，如标签就含有字符串，这个在类别中不好分类

- 可以参考
    - [leetcode 题目分类](https://zhuanlan.zhihu.com/c_1083367494890164224)
        > 我觉得这个可以重点参考下，首先没必要去挨个挨个刷题，而是自己先看下有哪些类别，然后按照每个类别去刷特定的题目，每个类别多刷几道题，到最后每个类别都知道有哪些解法，再去看看剩下的题，为什么没有归类，如何刷
       每个类别刷题后记得要写博客与总结
    - [leetcode 标签](https://leetcode-cn.com/tag/dynamic-programming/)
        > leetcode 本身自带标签了，可以通过标签来刷
    - 刷数据结构的时候，可以先去搜索下使用场景
        > 比如链表分单向链表和双向链表，适用场景是什么
        [有数组的情况下为什么还要链表](https://juejin.im/post/5d843f145188254009776ea5)
    - [lessfish](https://github.com/lessfish/leetcode)
    - [leetcode-javascript](https://github.com/chihungyu1116/leetcode-javascript)
    - [leetcode-cn中自带的用户题解](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/)
---
- 五大常用算法
    - 动态规划
    - 分治算法
    - 贪心算法
    - 回溯算法
    - 分支限定法
- [告别动态规划，连刷 40 道题，我总结了这些套路，看不懂你打我](https://juejin.im/post/5dcb8201e51d45210f046f5a)
    > 这里面的优化，从二维数组优化为一维数组，没看懂这一步， `dp[i] = dp[i-1] + dp[i]` 是怎么推导出来的
- [五大常用算法之一：分治算法](https://www.cnblogs.com/steven_oyj/archive/2010/05/22/1741370.html)
    > 和动态规划的非常类似，就是不断的划分更小的结构来解决，但与动态规划的区别在于，分治是划分不同的子结构最后合并，如二分搜索、快速排序，而动态规划是Fibonacci算法，每次都依赖前一次的计算结果
- [五大常用算法之三：贪心算法](https://www.cnblogs.com/steven_oyj/archive/2010/05/22/1741375.html)
    > 贪心算法（英語：greedy algorithm），又称贪婪算法，是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。

    > 典型的就是背包问题  有一个背包，背包容量是M=150。有7个物品，物品可以分割成任意大小。要求尽可能让装入背包中的物品总价值最大，但不能超过总容量。
- [小白带你学---回溯算法（Back Tracking)](https://zhuanlan.zhihu.com/p/54275352)
    > 典型的就是八皇后问题，可以看这篇文章中的八皇后问题介绍，算法可能讲的不是很好
- [五大常用算法之五：分支限界法](https://www.cnblogs.com/steven_oyj/archive/2010/05/22/1741378.html)
    > 类似于回溯法，也是一种在问题的解空间树T上搜索问题解的算法。但在一般情况下，分支限界法与回溯法的求解目标不同。回溯法的求解目标是找出T中满足约束条件的所有解，而分支限界法的求解目标则是找出满足约束条件的一个解，或是在满足约束条件的解中找出使某一目标函数值达到极大或极小的解，即在某种意义下的最优解。
    > 也有说背包问题是 分支限定法 中的而不是贪心算法的（这个说法好像多一点）
    > 旅行商问题、