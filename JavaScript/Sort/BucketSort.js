// 桶排序
module.exports = function BucketSort(nums) {
    if(nums === null || nums.length <= 1) return;
    var max = nums[0];
    // 找到数组的最大值
    for(var i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    // 创建桶
    var bucket = new Array(max+1).fill(0);
    // 遍历数据放入桶中
    for(var i = 0; i < nums.length; i++) {
        bucket[nums[i]]++;
    }
    // 把桶中数据放回数组中
    var i = 0;
    for(var j = 0; j < bucket.length; j++) {
        while(bucket[j]-- > 0) {
            nums[i++] = j;
        }
    }
}