
// 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

const isRectangleOverlap = function (rec1, rec2) {
    return (
        Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0])
        && Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
    )
}

