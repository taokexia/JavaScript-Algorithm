// 归并排序
module.exprts.mergeSort = function mergeSort(arr) {
    var len = arr.length;
    _mergeSort(arr, 0, len-1);
}
/**
 * 递归方式
 * @param arr
 * @param l
 * @param r
 * @private
 */
function _mergeSort(arr, l, r) {
    if (l >= r) {
        return
    }
    let mid = (l + r) >> 1;
    _mergeSort(arr, l, mid);
    _mergeSort(arr, mid + 1, r);
    // 当数组索引mid的值大于mid+1的值，才进行merge
    if (arr[mid] > arr[mid + 1])
        _merge(arr, l, mid, r);
}

function _merge(arr, l, mid, r) {
    let aux = [];
    // 拷贝出要归并的数据
    for (let i = l; i <= r; i++) {
        aux[i - l] = arr[i];
    }
    let i = l,
        j = mid + 1;
    // 当l=6, r=9
    //i=6,mid=7,j=8
    for (let k = l; k <= r; k++) {
        // 当i > mid，表示[l, mid]这段里的数据都已经在数组里了，接下来跑[mid+1, r]里的数据
        if (i > mid) {
            arr[k] = aux[j - l];
            j++
        } else if (j > r) {
            // 当 j > r,表示[mid+1, r]这段里的数据都已经在数组里了，接下来跑[l, mid]里的数据
            arr[k] = aux[i - l];
            i++
        } else if (aux[i - l] > aux[j - l]) {
            // 左边数组里的数值大于右边数组里的数值，把右边数据加入到数组中，同时索引j++:
            arr[k] = aux[j - l];
            j++
        } else {
            // 右边数组里的数值大于左边数组里的数值，把左边数据加入到数组中，同时索引i++:
            arr[k] = aux[i - l];
            i++
        }
    }
}

/**
 * 非递归方式
 * @param arr
 * @param l
 * @param r
 * @private
 */
module.exprts.nonRecMergeSort = function nonRecMergeSort(arr) {
    var stack = [],
        res = [],
        start = 0,
        end = arr.length - 1;
    if (start < end) {
        stack.push(end);
        stack.push(start);
        res.push(end);
        res.push(start);
        while (stack.length) {
            var l = stack.pop();
            var r = stack.pop();
            var mid = l + Math.floor((r - l) / 2);
            if (mid + 1 < r) {
                stack.push(r);
                res.push(r);
                stack.push(mid + 1);
                res.push(mid + 1);
            }
            if (l < mid) {
                stack.push(mid);
                res.push(mid);
                stack.push(l);
                res.push(l);
            }
        }
    }
    while (res.length) {
        var ls = res.pop();
        var rs = res.pop();
        var mids = ls + Math.floor((rs - ls) / 2);
        _merge(arr, ls, mids, rs);
    }

}
