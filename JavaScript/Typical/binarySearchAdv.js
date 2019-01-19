/*
 * 优化二分查找
 * 之前实现的二分查找，如果查找的数组中存在大量的重复元素,会有重复运行的现象
 * 优化后：
 * 如果找到target，返回第一个target相应的索引index
 * 如果没找到target，返回比target小的最大值相应索引，如果这个最大值有多个，返回最大索引
 * 如果这个target比整个数组的最小元素值还小，则不存在这个target的floor值，返回-1
 */
module.exports.floor = function floor(arr, target) {
    let l = -1;
    let r = arr.length-1;
    while(l < r){
        // 向上取整避免死循环
        let mid = l + Math.ceil((r-l)/2);
        if(arr[mid] >= target) {
            r = mid-1;
        } else {
            l = mid;
        }
    }
    // 如果该索引+1就是target本身，该索引+1即为返回值
    if(l+1 < arr.length && arr[l+1] === target) {
        return l+1;
    }
    // 否则，该索引即为返回值
    return l;
}
/*
 * 优化二分查找
 * 之前实现的二分查找，如果查找的数组中存在大量的重复元素,会有重复运行的现象
 * 优化后：
 * 如果找到target，返回最后一个target相应的索引index
 * 如果没找到target，返回比target大的最小值相应索引，如果这个最小值有多个，返回最小索引
 * 如果这个target比整个数组的最大元素值还大，则不存在这个target的ceil值，返回1
 */
module.exports.ceil = function ceil(arr, target) {
    let l = 0;
    let r = arr.length-1;
    while(l < r) {
        // 向下取整避免死循环
        let mid = l+Math.floor((r-l)/2);
        if(arr[mid] <= target) {
            l = mid+1;
        } else {
            r = mid;
        }
    }
    // 如果该索引+1就是target本身，该索引+1即为返回值
    if(l+1 < arr.length && arr[l+1] === target) {
        return l+1;
    }
    // 否则，该索引即为返回值
    return l;
}