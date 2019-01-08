module.exports = function InsertSort(nums) {
    if(nums === null || nums.length <= 1) return;
    for(var i = 1; i < nums.length; i++) {
        for(var j = i-1; j >= 0 && nums[j] > nums[j+1];j--) {
            swap(nums, j, j+1);
        }
    } 
}

function swap(nums, a, b) {
    var t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
}