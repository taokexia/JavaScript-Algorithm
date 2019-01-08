module.exports = function BubbleSort(nums) {
    if(nums === null || nums.length <=1) return;
    for(var i = nums.length - 1; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if(nums[j] > nums[j+1]) {
                var t = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = t;
            }
        }
    }  
}



