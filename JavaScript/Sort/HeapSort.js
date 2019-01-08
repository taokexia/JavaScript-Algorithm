module.exports = function HeapSort(nums) {
    if(nums === null|| nums.length < 2) return;
    // 最大堆，首先去第一个元素，放在队尾
    for(var i = 0; i < nums.length; i++) {
        heapInsert(nums, i);
    }
    var len = nums.length;
    swap(nums, 0, --len);
    while(len > 0) {
        heapify(nums, 0, len);
        swap(nums, 0, --len);
    }
}

function heapInsert(nums, index) {
    while(nums[index] > nums[Math.floor((index - 1)/2)]) {
        swap(nums, index, Math.floor((index - 1) / 2));
        index =  Math.floor((index - 1) / 2);
    }
}

function heapify(nums, index, len) {
    var left = 2 * index + 1;
    while(left < len) {
        var largest = left+1 < len && nums[left+1] > nums[left] ? left+1 : left;
        largest = nums[largest] > nums[index] ? largest : index;
        if(largest === index) {
            break;
        }
        swap(nums, largest, index);
        index = largest;
        left =  2 * index + 1;
    }
}

function swap(nums, a, b) {
    var t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
}

