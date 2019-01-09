module.exports = function MergeSort(nums) {
    if(nums === null || nums.length <= 1) return;
    MergeSortPart(nums, 0, nums.length-1);
}

function MergeSortPart(nums, l, r) {
    if(l === r) {
        return;
    }
    var mid = l + parseInt((r - l) / 2);
    MergeSortPart(nums, l, mid);
    MergeSortPart(nums, mid + 1, r);
    Merge(nums, l, mid, r); 
}

function Merge(nums, l, mid, r) {
    var help = new Array(r - l + 1);
    var i = 0;
    var p1 = l;
    var p2 = mid + 1;
    while(p1 <= mid && p2 <= r) {
        help[i++] = nums[p1] > nums[p2] ? nums[p2++] : nums[p1++];
    }
    while(p1 <= mid) {
        help[i++] = nums[p1++];
    }
    while(p2 <= r) {
        help[i++] = nums[p2++];
    }
    for(i = 0; i < help.length; i++) {
        nums[l+i] = help[i];
    }
}