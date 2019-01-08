module.exports = function SelectSort(nums) {
    if(nums === null || nums.length <= 1) return;
    for(var i = 0; i < nums.length; i++) {
        var minIndex = i;
        for(var j = i+1; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j; 
            }
        }
        if(minIndex !== i) {
            var t = nums[minIndex];
            nums[minIndex] = nums[i];
            nums[i] = t;
        }
    }        
}