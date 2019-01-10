// 基数排序
module.exports = function RadixSort(nums) {
    if(nums === null || nums.length <= 1) return;
    _RadixSort(nums, 0, nums.length -1, maxBits(nums));
}
// 获取最大值的位数
function maxBits(nums) {
    var max = nums[0];
    for(var i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    var res = 0;
    while(max !== 0) {
        res++;
        max = parseInt(max/10);
    }
    return res;
}

function _RadixSort(nums, begin, end, digit) {
    const radix = 10;
    var i = 0;
    var j = 0;
    var count = new Array(radix);
    var bucket = new Array(end-begin+1);
    for(var d = 1; d <= digit; d++) {
        // 将count数组每个元素置0
        for (i = 0; i < radix; i++) {
            count[i] = 0;
        }
        // 循环记录每个位上数字的个数。
        for(i = begin; i <= end; i++) {
            j = getDigit(nums[i], d);
            count[j]++;
        }
        // 补充位数，用于后面桶数组找到对应的位置
        for(i = 1; i < radix; i++) {
            // 把计数的数组改为记录顺序的数组。
            // 如原先数组： 28， 1， 42
            // 原来count数组： 0 1 1 0 0 0 0 0 1 0
            // 修改count后: 0 1 2 2 2 2 2 2 3 3
            // 用于下面bucket找到对应索引 
            count[i] = count[i] + count[i - 1];
        }
        // 按照count顺序给bucket赋值
        for(i = end; i >= begin; i--) {
            j = getDigit(nums[i], d);
            bucket[count[j] - 1] = nums[i];
            count[j]--;
        }
        // 把bucket数组的值赋值给数组
        for(i = begin, j = 0; i <= end; i++, j++) {
            nums[i] = bucket[j];
        }
    }
}
// 获取d * 10位上的数
function getDigit(x, d) {
    return parseInt(((x / parseInt(Math.pow(10, d - 1))) % 10));
}

