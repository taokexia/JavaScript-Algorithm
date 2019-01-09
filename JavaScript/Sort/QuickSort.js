module.exports = function QuickSort(nums) {
    if(nums === null || nums.length <= 1) return;
    QuickSortNum(nums, 0, nums.length-1);
}

function QuickSortNum(nums, l, r) {
    if(l < r) {
        swap(nums, l+(Math.floor(Math.random() * (r - l + 1))), r);
        var p = partition(nums, l, r);
        QuickSortNum(nums, l, p[0] - 1);
        QuickSortNum(nums, p[1] + 1, r);
    }
}

function partition(nums, l, r) {
    var less = l - 1;
    var more = r;
    while(l < more) {
        if(nums[l] < nums[r]) {
            swap(nums, ++less, l++);
        } else if (nums[l] > nums[r]) {
            swap(nums, --more, l);
        } else {
            l++;
        }
    }
    // console.log(less+" ; "+more+" ; "+ l);
    swap(nums, more, r);
    return [less+1, more];
}

function swap(nums, a, b) {
    var t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
}