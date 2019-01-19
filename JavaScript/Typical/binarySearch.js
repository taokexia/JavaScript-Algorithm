/*
 * 二分查找法
 * 前提条件：数组有序
 */
module.exports.binarySearch1 = function binarySearch1(arr, target) {
    // 在arr[l...r]之中查找target
    let l = 0;
    let r = arr.length-1;
    while(l <= r) {
        // int mid = Math.floor((r+l)/2);
        // 防止极端情况下数据溢出
        var mid = l + Math.floor((r-l)/2);
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] > target) {
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    return -1;
}

// 用递归的方式写二分查找法
module.exports.binarySearch2 = function binarySearch2(arr, target) {
    return __binarySearch2(arr, 0, arr.length-1, target);
}

function __binarySearch2(arr, l, r, target) {
    if(l > r) return -1;
    var mid = l + Math.floor((r - l)/2);
    if(arr[mid] === target)
        return mid;
    else if(arr[mid] < target) {
        return __binarySearch2(arr, mid+1, r, target);
    } else {
        return __binarySearch2(arr, l, mid-1, target);
    }
}

